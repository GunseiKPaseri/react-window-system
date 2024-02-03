import React, { type ReactNode } from "react";
import type { Props as RndProps } from "react-rnd";
export declare function Window(props: RndProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Window {
    var TitleBar: typeof Header;
    var Body: (props: {
        children: React.ReactNode;
    } & React.HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element;
}
declare function Header(props: {
    children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
declare namespace Header {
    var Title: (props: React.HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element;
    var MaximizeButton: (props: React.HTMLAttributes<HTMLButtonElement>) => import("react/jsx-runtime").JSX.Element;
    var CloseButton: (props: React.HTMLAttributes<HTMLButtonElement>) => import("react/jsx-runtime").JSX.Element;
    var MinimizeButton: (props: React.HTMLAttributes<HTMLButtonElement>) => import("react/jsx-runtime").JSX.Element;
}
export {};
