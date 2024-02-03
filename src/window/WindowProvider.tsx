import type { WindowState } from "../windowSystem/type";
import { WindowContext, type WindowControler } from "./windowcontext";

export const WindowProvider = (
  props: { children: JSX.Element; state: WindowState } & WindowControler,
) => {
  const { children, state, ...ctrl } = props;
  return (
    <WindowContext.Provider value={{ ...state, ...ctrl }}>
      {children}
    </WindowContext.Provider>
  );
};
