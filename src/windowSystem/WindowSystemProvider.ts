import { createContext, useContext } from "react";

type WindowSystemContextType = {
  windowAreaNode: HTMLDivElement | null;
  windowProviderNode: HTMLDivElement | null;
  layerQueue: string[];
  wsId: string;
  windowTransitionDuration: number;
  memorySavingMode: boolean;
};

export const WindowSystemContext = createContext<
  WindowSystemContextType | undefined
>(undefined);

export const useWindowSystemState = () => {
  const context = useContext(WindowSystemContext);
  if (!context) {
    throw new Error("useWindow must be used within a WindowSystem");
  }
  return context;
};
