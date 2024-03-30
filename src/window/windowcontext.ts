import { createContext, useContext } from "react";
import type { Props as RndProps } from "react-rnd";
import { useWindowSystemState } from "../windowSystem/WindowSystemProvider";
import type {
  BigWindow,
  WindowExpAttr,
  WindowExpAttrWithLayer,
} from "../windowSystem/type";

export type WindowSystemControler = {
  bigWindowSuggest: (w: { bigWindow: BigWindow }) => void;
  changeWindowExpAttrWithLayer: (state: Partial<WindowExpAttr>) => void;
  activateWindow: () => void;
  closeWindow: () => void;
  maximizeWindow: (newMaximize?: BigWindow) => void;
  minimizeWindow: () => void;
  hideWindow: () => void;
};

type WindowPos = NonNullable<RndProps["default"]>;

export type WindowState = {
  windowPos: WindowPos;
  setWindowPos: (windowPos: WindowPos & { dragging?: boolean }) => void;
  isDragging: boolean;
  setIsDragging: (isDragging: boolean) => void;
  windowPosBeforeMaximize: WindowPos;
};

type WindowContextType = WindowExpAttrWithLayer &
  WindowSystemControler &
  WindowState;

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
