import React from "react";
import type {
  BigWindow,
  WindowAttr,
  WindowExpAttr,
  WindowExpAttrWithLayer,
} from "./windowSystem/type";

// 初期値を適用してウィンドウの状態を返す
export const getdefaultWindowExpAttr = (
  windowExpAttrRecord: Record<string, WindowExpAttr | undefined>,
  w: WindowAttr | string,
): WindowExpAttr =>
  windowExpAttrRecord[typeof w === "string" ? w : w.id] ?? {
    closed: false,
    maximize: false,
    minimize: false,
  };

// レイヤーを計算する
export const calcLayerIndex = (
  layerQueue: string[],
  existWindows: WindowAttr[],
  windowExpAttr: Record<string, WindowExpAttr | undefined>,
): WindowExpAttrWithLayer[] =>
  existWindows.map((x) => {
    const layerIndex = layerQueue.findIndex((layer) => x.id === layer);
    const isActive = layerIndex === layerQueue.length - 1;
    return {
      ...x,
      ...getdefaultWindowExpAttr(windowExpAttr, x),
      layerIndex: isActive ? layerQueue.length + 10 : layerIndex,
      isActive,
    };
  });

// 追加されたウィンドウを最前面に持ってくる
export const updateLayerQueue = (
  layerQueue: string[],
  windows: WindowAttr[],
) => {
  const windowIds = windows.map((w) => w.id);
  const remainLayerQueue = layerQueue.filter((id) => windowIds.includes(id));
  const newWindows = windowIds.filter(
    (windowId) => !remainLayerQueue.includes(windowId),
  );
  return {
    updatedLayerQueue: [...remainLayerQueue, ...newWindows],
    updated:
      newWindows.length > 0 || remainLayerQueue.length !== layerQueue.length,
  };
};

// ウィンドウを最前面に持ってくる
export const bringToFront = (layerQueue: string[], windowId: string) => {
  const remainLayerQueue = layerQueue.filter((id) => id !== windowId);
  return [...remainLayerQueue, windowId];
};

const bigWindowSizeCore = (
  bigWindow: BigWindow,
  minimize?: boolean,
): {
  top: "full" | "half" | "none";
  left: "full" | "half" | "none";
  width: "full" | "half" | "none";
  height: "full" | "half" | "none";
} => {
  if (minimize)
    return { top: "none", left: "none", width: "none", height: "none" };
  switch (bigWindow) {
    case "full":
      return { top: "none", left: "none", width: "full", height: "full" };
    case "bottom-left":
      return { top: "half", left: "none", width: "half", height: "half" };
    case "bottom-right":
      return { top: "half", left: "half", width: "half", height: "half" };
    case "top-left":
      return { top: "none", left: "none", width: "half", height: "half" };
    case "top-right":
      return { top: "none", left: "half", width: "half", height: "half" };
    case "left":
      return { top: "none", left: "none", width: "half", height: "full" };
    case "right":
      return { top: "none", left: "half", width: "half", height: "full" };
    case "top":
      return { top: "none", left: "none", width: "full", height: "half" };
    case "bottom":
      return { top: "half", left: "none", width: "full", height: "half" };
    default:
      return { top: "none", left: "none", width: "none", height: "none" };
  }
};

const sizeCoreToNum = (
  size: "full" | "half" | "none",
  parentNum: number,
  margin: number,
) =>
  size === "full"
    ? parentNum - margin * 2
    : size === "half"
      ? parentNum / 2 - margin * 2
      : 0;

export const bigWindowSizeAsNum = (props: {
  bigWindow: BigWindow;
  parentWidth: number;
  parentHeight: number;
  margin?: number;
  minimize?: boolean;
}) => {
  const size = bigWindowSizeCore(props.bigWindow, props.minimize);
  return {
    y: sizeCoreToNum(size.top, props.parentHeight, props.margin ?? 0),
    x: sizeCoreToNum(size.left, props.parentWidth, props.margin ?? 0),
    width: sizeCoreToNum(size.width, props.parentWidth, props.margin ?? 0),
    height: sizeCoreToNum(size.height, props.parentHeight, props.margin ?? 0),
  };
};

const sizeCoreToCSS = (size: "full" | "half" | "none") =>
  size === "full" ? "100%" : size === "half" ? "50%" : 0;
const sizeCoreToCSSWithMargin = (
  size: "full" | "half" | "none",
  margin: string | number,
) =>
  size === "full"
    ? `calc(100% - ${margin} - ${margin})`
    : size === "half"
      ? `calc(50% - ${margin} - ${margin})`
      : 0;

// BigWindow型からCSSのプロパティを返す
export const bigWindowSizeAsCSS = (props: {
  bigWindow: BigWindow;
  margin?: string | number;
  minimize?: boolean;
}): Required<
  Pick<React.CSSProperties, "top" | "left" | "width" | "height">
> => {
  const size = bigWindowSizeCore(props.bigWindow, props.minimize);
  return {
    top: sizeCoreToCSS(size.top),
    left: sizeCoreToCSS(size.left),
    width: sizeCoreToCSSWithMargin(size.width, props.margin ?? 0),
    height: sizeCoreToCSSWithMargin(size.height, props.margin ?? 0),
  };
};
