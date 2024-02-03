/// <reference types="react" />
import type { Props as RndProps } from "react-rnd";
import type { BigWindow, WindowState } from "../windowSystem/type";
export type WindowControler = {
    bigWindowSuggest: (w: {
        bigWindow: BigWindow;
    }) => void;
    activateWindow: () => void;
    closeWindow: () => void;
    maximizeWindow: () => void;
    minimizeWindow: () => void;
    resizeWindow: (ref: NonNullable<RndProps["default"]>, maximize?: BigWindow) => void;
    hideWindow: () => void;
};
type WindowContextType = WindowState & WindowControler;
export declare const WindowContext: import("react").Context<WindowContextType | undefined>;
export declare const useWindow: () => {
    windowAreaNode: HTMLDivElement | null;
    windowProviderNode: HTMLDivElement | null;
    layerQueue: string[];
    wsId: string;
    id: string;
    defaultWindowPos: {
        x: number;
        y: number;
    } & {
        width: string | number;
        height: string | number;
    };
    header: import("react").ReactNode;
    body: import("react").ReactNode;
    closed: boolean;
    maximize: BigWindow;
    minimize: boolean;
    windowPos: {
        x: number;
        y: number;
    } & {
        width: string | number;
        height: string | number;
    };
    layerIndex: number;
    isActive: boolean;
    bigWindowSuggest: (w: {
        bigWindow: BigWindow;
    }) => void;
    activateWindow: () => void;
    closeWindow: () => void;
    maximizeWindow: () => void;
    minimizeWindow: () => void;
    resizeWindow: (ref: NonNullable<RndProps["default"]>, maximize?: BigWindow) => void;
    hideWindow: () => void;
};
export {};
