import { useRef } from "react";
import { Window } from "../window/Window";
import type { WindowSystemControler } from "../window/windowcontext";
import { WindowSystemContext } from "../windowSystem/WindowSystemProvider";
import type { WindowExpAttrWithLayer } from "../windowSystem/type";

type WindowOnlyProps = {
  window: WindowExpAttrWithLayer;
  children: JSX.Element;
};

const emptyWindowSystemControler: WindowSystemControler = {
  activateWindow: () => {},
  bigWindowSuggest: () => {},
  changeWindowExpAttrWithLayer: () => {},
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
        windowTransitionTime: 100,
      }}
    >
      <div
        ref={windowAreaNodeRef}
        style={{ width: 400, height: 400, position: "relative" }}
      >
        <Window
          ctrl={emptyWindowSystemControler}
          state={props.window}
          window={props.window}
        >
          {props.children}
        </Window>
      </div>
    </WindowSystemContext.Provider>
  );
}
