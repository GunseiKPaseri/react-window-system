import { useState } from "react";
import type { WindowExpAttrWithLayer } from "../windowSystem/type";
import { WindowContext, type WindowSystemControler } from "./windowcontext";

export const WindowProvider = (
  props: {
    children: JSX.Element;
    state: WindowExpAttrWithLayer;
  } & WindowSystemControler,
) => {
  const { children, state, ...ctrl } = props;
  const [isDragging, setIsDragging] = useState(false);
  const [windowPos, setWindowPos] = useState(state.defaultWindowPos);
  const [windowPosBeforeMaximize, setWindowPosBeforeMaximize] = useState(
    state.defaultWindowPos,
  );
  return (
    <WindowContext.Provider
      value={{
        ...state,
        ...ctrl,
        isDragging,
        setIsDragging,
        windowPos,
        setWindowPos,
        windowPosBeforeMaximize,
        setWindowPosBeforeMaximize,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};
