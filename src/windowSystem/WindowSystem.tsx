import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useKey } from "react-use";

import { DefaultTaskBar } from "../default/DefaultTaskBar";
import { DefaultWindow } from "../default/DefaultWindow";
import { WindowTaskContext } from "../taskbar/taskcontext";
import {
  bigWindowSizeAsCSS,
  bringToFront,
  calcLayerIndex,
  getdefaultWindowExpAttr,
  updateLayerQueue,
} from "../util";
import { Window } from "../window/Window";
import {
  WindowSystemContext,
  useWindowSystemState,
} from "./WindowSystemProvider";
import type {
  BigWindow,
  WindowAttr,
  WindowExpAttr,
  WindowUIProps,
} from "./type";

const defaultTransitionTime = 100;

type WindowSystemProps = {
  windows: WindowAttr[];
  Window?: (props: WindowUIProps) => JSX.Element;
  TaskBar?: (props: React.HTMLAttributes<HTMLUListElement>) => JSX.Element;
  onWindowChange?: (windows: WindowAttr[]) => void;
  windowTransitionDuration?: number;
  memorySavingMode?: boolean;
  shortcutKey?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function BigWindowSuggester(
  props: React.HTMLAttributes<HTMLDivElement> & { bigWindow: BigWindow },
) {
  const { bigWindow, ...divProps } = props;
  const { layerQueue } = useWindowSystemState();

  return (
    <div
      {...divProps}
      style={{
        position: "absolute",
        pointerEvents: "none",
        zIndex: layerQueue.length,
        transition: "0.1s",
        backgroundColor: `rgba(100, 100, 100, ${bigWindow ? 0.2 : 0})`,
        backdropFilter: "blur(5px)",
        margin: "5px",
        borderRadius: "5px",
        ...(bigWindow
          ? bigWindowSizeAsCSS({ bigWindow, margin: "5px" })
          : { top: "50%", left: "50%", width: 0, height: 0 }),
        ...divProps.style,
      }}
    />
  );
}

export function WindowSystem(props: WindowSystemProps) {
  const {
    windows,
    Window = DefaultWindow,
    TaskBar = DefaultTaskBar,
    onWindowChange,
    windowTransitionDuration = defaultTransitionTime,
    memorySavingMode = true,
    shortcutKey = true,
    ...windowAreaProps
  } = props;
  const [layerQueue, setLayerQueue] = useState<string[]>([]);
  const [bigWindowSuggestion, setBigWindowSuggestion] =
    useState<BigWindow>(false);
  const [windowExpAttr, setWindowExpAttr] = useState<
    Record<string, WindowExpAttr | undefined>
  >({});

  const wsId = useId();
  // 表示されているウィンドウのみを抽出
  useEffect(() => {
    // 不用なウィンドウの廃棄
    const windowIds = windows.map((w) => w.id);
    setWindowExpAttr((windowExpAttr) =>
      Object.fromEntries(
        Object.entries(windowExpAttr).filter((x) => windowIds.includes(x[0])),
      ),
    );
  }, [windows]);
  const existWindows = useMemo(
    () => windows.filter((w) => !windowExpAttr[w.id]?.closed),
    [windows, windowExpAttr],
  );

  useEffect(() => {
    // 追加されたウィンドウを最前面に持ってくる
    const { updatedLayerQueue, updated } = updateLayerQueue(
      layerQueue,
      existWindows,
    );
    if (updated) {
      setLayerQueue(updatedLayerQueue);
    }
  }, [layerQueue, existWindows]);

  // calculate layer
  const windowExpAttrWithLayer = calcLayerIndex(
    layerQueue,
    existWindows,
    windowExpAttr,
  );

  const windowAreaNodeRef = useRef<HTMLDivElement>(null);
  const windowProviderNodeRef = useRef<HTMLDivElement>(null);

  // shift+tabで前ウィンドウに切り替え
  useKey(
    (e) => e.key === "Tab" && e.shiftKey,
    (e) => {
      if (shortcutKey === false) return;
      e.preventDefault();
      setLayerQueue((layer) => {
        if (layer.length === 0) return layer;
        const prev = layer[layer.length - 1];
        return [prev, ...layer.slice(0, -1)];
      });
    },
  );
  // tabで次ウィンドウに切り替え
  useKey(
    (e) => e.key === "Tab",
    (e) => {
      if (shortcutKey === false) return;
      e.preventDefault();
      setLayerQueue((layer) => {
        if (layer.length === 0) return layer;
        const [next, ...other] = layer;
        return [...other, next];
      });
    },
  );

  return (
    <WindowSystemContext.Provider
      value={{
        layerQueue,
        wsId,
        windowTransitionDuration,
        windowAreaNode: windowAreaNodeRef.current,
        windowProviderNode: windowProviderNodeRef.current,
        memorySavingMode,
      }}
    >
      <div
        ref={windowProviderNodeRef}
        {...windowAreaProps}
        style={{
          ...windowAreaProps.style,
          display: "grid",
          gridTemplateRows: "auto 30px",
          gridTemplateColumns: "100%",
          alignItems: "end",
          justifyItems: "stretch",
        }}
      >
        <div
          ref={windowAreaNodeRef}
          style={{ height: "100%", position: "relative" }}
        >
          {windowExpAttrWithLayer.map((w) => (
            <Window
              key={w.id}
              state={w}
              ctrl={{
                activateWindow: () => {
                  setLayerQueue((layerQueue) => bringToFront(layerQueue, w.id));
                },
                bigWindowSuggest: (w: { bigWindow: BigWindow }) => {
                  setBigWindowSuggestion(w.bigWindow);
                },
                changeWindowExpAttrWithLayer: (state) => {
                  setWindowExpAttr((windowExpAttr) => ({
                    ...windowExpAttr,
                    [w.id]: {
                      ...getdefaultWindowExpAttr(windowExpAttr, w),
                      ...state,
                    },
                  }));
                },
                closeWindow: () => {
                  setLayerQueue((layerQueue) =>
                    layerQueue.filter((id) => id !== w.id),
                  );
                  setWindowExpAttr((windowExpAttr) => ({
                    ...windowExpAttr,
                    [w.id]: {
                      ...getdefaultWindowExpAttr(windowExpAttr, w),
                      closed: true,
                    },
                  }));
                  onWindowChange?.(
                    windows.filter((w) => !windowExpAttr[w.id]?.closed),
                  );
                },
                maximizeWindow: (newMaximize?: BigWindow) => {
                  const maximize =
                    newMaximize ??
                    (windowExpAttr[w.id]?.maximize ? false : "full");
                  setLayerQueue((layerQueue) => bringToFront(layerQueue, w.id));
                  setWindowExpAttr((windowExpAttr) => ({
                    ...windowExpAttr,
                    [w.id]: {
                      ...getdefaultWindowExpAttr(windowExpAttr, w),
                      maximize,
                    },
                  }));
                },
                minimizeWindow: () => {
                  setLayerQueue((layerQueue) => bringToFront(layerQueue, w.id));
                  setWindowExpAttr((windowExpAttr) => ({
                    ...windowExpAttr,
                    [w.id]: {
                      ...getdefaultWindowExpAttr(windowExpAttr, w),
                      minimize: windowExpAttr[w.id]?.minimize ? false : true,
                    },
                  }));
                },
                hideWindow: () => undefined,
              }}
              window={w}
            />
          ))}
          <BigWindowSuggester bigWindow={bigWindowSuggestion} />
        </div>
        <WindowTaskContext.Provider
          value={{
            windows: windowExpAttrWithLayer,
            activateWindow: (id) => {
              setLayerQueue((layerQueue) => bringToFront(layerQueue, id));
              if (windowExpAttr[id]?.minimize) {
                setWindowExpAttr((windowExpAttr) => ({
                  ...windowExpAttr,
                  [id]: {
                    ...getdefaultWindowExpAttr(windowExpAttr, id),
                    minimize: false,
                  },
                }));
              }
            },
            closeWindow: (id) => {
              setLayerQueue((layerQueue) =>
                layerQueue.filter((layer) => layer !== id),
              );
              setWindowExpAttr((windowExpAttr) => ({
                ...windowExpAttr,
                [id]: {
                  ...getdefaultWindowExpAttr(windowExpAttr, id),
                  closed: true,
                },
              }));
              onWindowChange?.(
                windows.filter((w) => !windowExpAttr[w.id]?.closed),
              );
            },
          }}
        >
          <TaskBar />
        </WindowTaskContext.Provider>
      </div>
    </WindowSystemContext.Provider>
  );
}

WindowSystem.Window = Window;
