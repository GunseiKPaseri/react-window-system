import { useRef } from "react";
import { WindowProvider } from "..";
import { WindowControler } from "../window/windowcontext";
import { WindowSystemContext } from "../windowSystem/WindowSystemProvider";
import type { WindowState } from "../windowSystem/type";

type WindowOnlyProps = {
  window: WindowState;
  children: JSX.Element;
};

const emptyWindowControler: WindowControler = {
  activateWindow: () => {},
  bigWindowSuggest: () => {},
  resizeWindow: () => {},
  closeWindow: () => {},
  maximizeWindow: () => {},
  minimizeWindow: () => {},
  hideWindow: () => {},
};

export function WindowOnly(props: WindowOnlyProps) {
  const wsId = "wsId";
  const windowAreaNodeRef = useRef<HTMLDivElement>(null);
  const windowProviderNodeRef = useRef<HTMLDivElement>(null);
  const layerQueue = [props.window.id];
  return (
    <WindowSystemContext.Provider
      value={{
        layerQueue,
        wsId,
        windowAreaNode: windowAreaNodeRef.current,
        windowProviderNode: windowProviderNodeRef.current,
      }}
    >
      <div
        ref={windowAreaNodeRef}
        style={{ width: 400, height: 400, position: "relative" }}
      >
        <WindowProvider {...emptyWindowControler} state={props.window}>
          {props.children}
        </WindowProvider>
      </div>
    </WindowSystemContext.Provider>
  );
}
