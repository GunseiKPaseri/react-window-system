import type { BigWindow, WindowAttr } from "./windowSystem/type";

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
