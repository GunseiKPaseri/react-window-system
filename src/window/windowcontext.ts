import { createContext, useContext } from "react";
import type { Props as RndProps } from "react-rnd";
import { useWindowSystemState } from "../windowSystem/WindowSystemProvider";
import type { BigWindow, WindowState } from "../windowSystem/type";

export type WindowControler = {
  bigWindowSuggest: (w: { bigWindow: BigWindow }) => void;
  activateWindow: () => void;
  closeWindow: () => void;
  maximizeWindow: () => void;
  minimizeWindow: () => void;
  resizeWindow: (
    ref: NonNullable<RndProps["default"]>,
    maximize?: BigWindow,
  ) => void;
  hideWindow: () => void;
};

type WindowContextType = WindowState & WindowControler;

export const WindowContext = createContext<WindowContextType | undefined>(
  undefined,
);

export const useWindow = () => {
  const windowSystemContext = useWindowSystemState();
  const windowContext = useContext(WindowContext);
  if (!windowContext) {
    throw new Error("useWindow must be used within a Window");
  }
  return { ...windowContext, ...windowSystemContext };
};
