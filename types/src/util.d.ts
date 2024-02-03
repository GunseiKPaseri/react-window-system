import type { BigWindow, WindowAttr } from "./windowSystem/type";
export declare const updateLayerQueue: (layerQueue: string[], windows: WindowAttr[]) => {
    updatedLayerQueue: string[];
    updated: boolean;
};
export declare const bringToFront: (layerQueue: string[], windowId: string) => string[];
export declare const bigWindowSize: (props: {
    bigWindow: BigWindow;
    padding?: string;
}) => Pick<React.CSSProperties, "top" | "left" | "width" | "height"> | Record<never, never>;
