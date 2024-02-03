/// <reference types="react" />
import type { WindowState } from "../windowSystem/type";
type WindowTaskContextType = {
    windows: WindowState[];
    closeWindow: (id: string) => void;
    activateWindow: (id: string) => void;
};
export declare const WindowTaskContext: import("react").Context<WindowTaskContextType | undefined>;
export declare const useWindowTaskBar: () => WindowTaskContextType;
type WindowTaskItemContextType = {
    w: WindowState;
};
export declare const WindowTaskItemContext: import("react").Context<WindowTaskItemContextType | undefined>;
export declare const useWindowTaskItem: () => WindowTaskItemContextType;
export {};
