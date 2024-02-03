/// <reference types="react" />
import type { WindowState } from "../windowSystem/type";
declare function TaskList(props: React.HTMLAttributes<HTMLLIElement> & {
    w: WindowState;
}): import("react/jsx-runtime").JSX.Element;
declare namespace TaskList {
    var Body: (props: import("react").HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element;
    var Close: typeof TaskClose;
}
declare function TaskClose(props: React.HTMLAttributes<HTMLButtonElement>): import("react/jsx-runtime").JSX.Element;
export declare function TaskBar(props: React.HTMLAttributes<HTMLUListElement>): import("react/jsx-runtime").JSX.Element;
export declare namespace TaskBar {
    var List: typeof TaskList;
}
export {};
