import { createContext, useContext } from "react";
import type { WindowExpAttrWithLayer } from "../windowSystem/type";

type WindowTaskContextType = {
  windows: WindowExpAttrWithLayer[];
  closeWindow: (id: string) => void;
  activateWindow: (id: string) => void;
};

export const WindowTaskContext = createContext<
  WindowTaskContextType | undefined
>(undefined);

export const useWindowTaskBar = () => {
  const windowTaskContext = useContext(WindowTaskContext);
  if (windowTaskContext === undefined)
    throw new Error("WindowSystem is not provided");
  return windowTaskContext;
};

type WindowTaskItemContextType = {
  w: WindowExpAttrWithLayer;
};

export const WindowTaskItemContext = createContext<
  WindowTaskItemContextType | undefined
>(undefined);

export const useWindowTaskItem = () => {
  const windowTaskItemContext = useContext(WindowTaskItemContext);
  if (windowTaskItemContext === undefined)
    throw new Error("TaskList is not provided");
  return windowTaskItemContext;
};
