import { useState } from "react";
import { useWindowSystemState } from "..";
import { bigWindowSizeAsNum } from "../util";
import type { BigWindow, WindowExpAttrWithLayer } from "../windowSystem/type";
import {
  WindowContext,
  type WindowState,
  type WindowSystemControler,
} from "./windowcontext";

export const WindowProvider = (
  props: {
    children: JSX.Element;
    state: WindowExpAttrWithLayer;
  } & WindowSystemControler,
) => {
  const {
    children,
    state,
    maximizeWindow: maximizeWindowCore,
    minimizeWindow: minimizeWindowCore,
    ...ctrl
  } = props;
  const { windowAreaNode } = useWindowSystemState();
  const [isDragging, setIsDragging] = useState(false);
  const [windowPos, setWindowPosCore] = useState(state.defaultWindowPos);
  const [windowPosBeforeMaximize, setWindowPosBeforeMaximize] = useState(
    state.defaultWindowPos,
  );
  const minimizeWindow = () => {
    if (state.minimize) {
      setWindowPos(windowPosBeforeMaximize);
    }
    minimizeWindowCore();
  };
  const maximizeWindow = (newMaximize?: BigWindow) => {
    const maximize = newMaximize ?? (state.maximize ? false : "full");
    if (maximize) {
      const maximizedSize = bigWindowSizeAsNum({
        bigWindow: maximize,
        parentWidth: windowAreaNode?.clientWidth ?? 0,
        parentHeight: windowAreaNode?.clientHeight ?? 0,
        minimize: state.minimize,
      });
      setWindowPosCore(maximizedSize);
    } else {
      setWindowPos(windowPosBeforeMaximize);
    }
    maximizeWindowCore(newMaximize);
  };
  const setWindowPos: WindowState["setWindowPos"] = (props) => {
    const { dragging, ...newWindowPos } = props;
    if (!dragging) {
      setWindowPosBeforeMaximize(newWindowPos);
    }
    setWindowPosCore(newWindowPos);
  };
  return (
    <WindowContext.Provider
      value={{
        ...state,
        ...ctrl,
        maximizeWindow,
        minimizeWindow,
        isDragging,
        setIsDragging,
        windowPos,
        setWindowPos,
        windowPosBeforeMaximize,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};
