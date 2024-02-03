import type { ReactNode } from "react";
import type { Props as RndProps } from "react-rnd";

// Windowの設定可能なオプション
export type WindowAttr = {
  id: string;
  defaultWindowPos: NonNullable<RndProps["default"]>;
  header: ReactNode;
  body: ReactNode;
};

export type BigWindow =
  | "full"
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | false;

export type WindowExpAttr = {
  closed: boolean;
  maximize: BigWindow;
  minimize: boolean;
  windowPos: NonNullable<RndProps["default"]>;
};

// Windowの状態
export type WindowState = WindowAttr &
  WindowExpAttr & {
    layerIndex: number;
    isActive: boolean;
  };

export type WindowUIProps = {
  window: WindowState;
} & RndProps;
