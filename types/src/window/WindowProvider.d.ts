/// <reference types="react" />
import type { WindowState } from "../windowSystem/type";
import { type WindowControler } from "./windowcontext";
export declare const WindowProvider: (props: {
    children: JSX.Element;
    state: WindowState;
} & WindowControler) => import("react/jsx-runtime").JSX.Element;
