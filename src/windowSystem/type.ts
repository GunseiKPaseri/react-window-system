import type { ReactNode } from "react";
import type { Props as RndProps } from "react-rnd";
import { WindowSystemControler } from "../window/windowcontext";

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

// WindowSystemが管理する拡張設定
export type WindowExpAttr = {
  closed: boolean;
  maximize: BigWindow;
  minimize: boolean;
};

// レイヤー設定を反映したもの
export type WindowExpAttrWithLayer = WindowAttr &
  WindowExpAttr & {
    layerIndex: number;
    isActive: boolean;
  };

export type WindowUIProps = {
  window: WindowExpAttrWithLayer;
  ctrl: WindowSystemControler;
} & RndProps;
