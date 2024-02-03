/// <reference types="react" />
type WindowSystemContextType = {
    windowAreaNode: HTMLDivElement | null;
    windowProviderNode: HTMLDivElement | null;
    layerQueue: string[];
    wsId: string;
};
export declare const WindowSystemContext: import("react").Context<WindowSystemContextType | undefined>;
export declare const useWindowSystemState: () => WindowSystemContextType;
export {};
