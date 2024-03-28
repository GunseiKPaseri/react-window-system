import type {
  BigWindow,
  WindowAttr,
  WindowExpAttr,
  WindowState,
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
    windowPos:
      typeof w === "string"
        ? {
            x: 0,
            y: 0,
            width: 200,
            height: 200,
          }
        : w.defaultWindowPos,
  };

// レイヤーを計算する
export const calcLayerIndex = (
  layerQueue: string[],
  existWindows: WindowAttr[],
  windowExpAttr: Record<string, WindowExpAttr | undefined>,
): WindowState[] =>
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

// BigWindow型からCSSのプロパティを返す
export const bigWindowSize = (props: {
  bigWindow: BigWindow;
  padding?: string;
}):
  | Pick<React.CSSProperties, "top" | "left" | "width" | "height">
  | Record<never, never> => {
  const { bigWindow, padding = "0px" } = props;
  switch (bigWindow) {
    case "full":
      return {
        top: 0,
        left: 0,
        width: `calc(100% - ${padding} - ${padding})`,
        height: `calc(100% - ${padding} - ${padding})`,
      };
    case "bottom-left":
      return {
        top: "50%",
        left: 0,
        width: `calc(50% - ${padding} - ${padding})`,
        height: `calc(50% - ${padding} - ${padding})`,
      };
    case "bottom-right":
      return {
        top: "50%",
        left: "50%",
        width: `calc(50% - ${padding} - ${padding})`,
        height: `calc(50% - ${padding} - ${padding})`,
      };
    case "top-left":
      return {
        top: 0,
        left: 0,
        width: `calc(50% - ${padding} - ${padding})`,
        height: `calc(50% - ${padding} - ${padding})`,
      };
    case "top-right":
      return {
        top: 0,
        left: "50%",
        width: `calc(50% - ${padding} - ${padding})`,
        height: `calc(50% - ${padding} - ${padding})`,
      };
    case "left":
      return {
        top: 0,
        left: 0,
        width: `calc(50% - ${padding} - ${padding})`,
        height: `calc(100% - ${padding} - ${padding})`,
      };
    case "right":
      return {
        top: 0,
        left: "50%",
        width: `calc(50% - ${padding} - ${padding})`,
        height: `calc(100% - ${padding} - ${padding})`,
      };
    case "top":
      return {
        top: 0,
        left: 0,
        width: `calc(100% - ${padding} - ${padding})`,
        height: `calc(50% - ${padding} - ${padding})`,
      };
    case "bottom":
      return {
        top: "50%",
        left: 0,
        width: `calc(100% - ${padding} - ${padding})`,
        height: `calc(50% - ${padding} - ${padding})`,
      };
  }
  return {};
};
