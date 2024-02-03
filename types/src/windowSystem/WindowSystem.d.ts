/// <reference types="react" />
import type { WindowAttr, WindowUIProps } from "./type";
type WindowSystemProps = {
    windows: WindowAttr[];
    Window?: (props: WindowUIProps) => JSX.Element;
    TaskBar?: (props: React.HTMLAttributes<HTMLUListElement>) => JSX.Element;
    onWindowChange?: (windows: WindowAttr[]) => void;
} & React.HTMLAttributes<HTMLDivElement>;
export declare function WindowSystem(props: WindowSystemProps): import("react/jsx-runtime").JSX.Element;
export declare namespace WindowSystem {
    var Window: typeof import("../window/Window").Window;
}
export {};
