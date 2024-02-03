import { useEffect, useId, useRef, useState } from "react";

import { DefaultTaskBar } from "../default/DefaultTaskBar";
import { DefaultWindow } from "../default/DefaultWindow";
import { WindowTaskContext } from "../taskbar/taskcontext";
import { bigWindowSize, bringToFront, updateLayerQueue } from "../util";
import { Window } from "../window/Window";
import { WindowProvider } from "../window/WindowProvider";
import {
  WindowSystemContext,
  useWindowSystemState,
} from "./WindowSystemProvider";
import type {
  BigWindow,
  WindowAttr,
  WindowExpAttr,
  WindowState,
  WindowUIProps,
} from "./type";

const getdefaultWindowExpAttr = (
  windowExpAttrRecord: Record<string, WindowExpAttr | undefined>,
  w: WindowAttr | string,
): WindowExpAttr =>
  windowExpAttrRecord[typeof w === "string" ? w : w.id] ?? {
    closed: false,
    maximize: false,
    minimize: false,
    windowPos:
      typeof w === "string"
        ? {
            x: 0,
            y: 0,
            width: 200,
            height: 200,
          }
        : w.defaultWindowPos,
  };

type WindowSystemProps = {
  windows: WindowAttr[];
  Window?: (props: WindowUIProps) => JSX.Element;
  TaskBar?: (props: React.HTMLAttributes<HTMLUListElement>) => JSX.Element;
  onWindowChange?: (windows: WindowAttr[]) => void;
} & React.HTMLAttributes<HTMLDivElement>;

function BigWindowSuggester(
  props: React.HTMLAttributes<HTMLDivElement> & { bigWindow: BigWindow },
) {
  const { bigWindow, ...divProps } = props;
  if (bigWindow === false) return <></>;
  const { layerQueue } = useWindowSystemState();

  return (
    <div
      {...divProps}
      style={{
        position: "absolute",
        pointerEvents: "none",
        zIndex: layerQueue.length,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(5px)",
        margin: "5px",
        borderRadius: "5px",
        ...bigWindowSize({ bigWindow, padding: "5px" }),
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
    ...windowAreaProps
  } = props;
  const [layerQueue, setLayerQueue] = useState<string[]>([]);
  const [bigWindowSuggestion, setBigWindowSuggestion] =
    useState<BigWindow>(false);
  const [windowExpAttr, setWindowExpAttr] = useState<
    Record<string, WindowExpAttr | undefined>
  >({});

  const wsId = useId();
  const existWindows = windows.filter((w) => !windowExpAttr[w.id]?.closed);
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const { updatedLayerQueue, updated } = updateLayerQueue(
      layerQueue,
      existWindows,
    );
    if (updated) {
      setLayerQueue(updatedLayerQueue);
    }
    const windowIds = windows.map((w) => w.id);
    setWindowExpAttr((windowExpAttr) =>
      Object.fromEntries(
        Object.entries(windowExpAttr).filter((x) => windowIds.includes(x[0])),
      ),
    );
  }, [windows, layerQueue]);

  // calculate layer
  const windowState: WindowState[] = existWindows.map((x) => {
    const layerIndex = layerQueue.findIndex((layer) => x.id === layer);
    const isActive = layerIndex === layerQueue.length - 1;
    return {
      ...x,
      ...getdefaultWindowExpAttr(windowExpAttr, x),
      layerIndex: isActive ? layerQueue.length + 10 : layerIndex,
      isActive,
    };
  });
  const windowAreaNodeRef = useRef<HTMLDivElement>(null);
  const windowProviderNodeRef = useRef<HTMLDivElement>(null);

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
          {windowState.map((w) => (
            <WindowProvider
              key={w.id}
              state={w}
              activateWindow={() =>
                setLayerQueue((layerQueue) => bringToFront(layerQueue, w.id))
              }
              bigWindowSuggest={(w: { bigWindow: BigWindow }) => {
                setBigWindowSuggestion(w.bigWindow);
              }}
              resizeWindow={(windowPos, bigWindow) => {
                setWindowExpAttr((windowExpAttr) => ({
                  ...windowExpAttr,
                  [w.id]: {
                    ...getdefaultWindowExpAttr(windowExpAttr, w),
                    ...(bigWindow ? { maximize: bigWindow } : { ...windowPos }),
                  },
                }));
              }}
              closeWindow={() => {
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
              }}
              maximizeWindow={() => {
                setLayerQueue((layerQueue) => bringToFront(layerQueue, w.id));
                setWindowExpAttr((windowExpAttr) => ({
                  ...windowExpAttr,
                  [w.id]: {
                    ...getdefaultWindowExpAttr(windowExpAttr, w),
                    maximize: windowExpAttr?.[w.id]?.maximize ? false : "full",
                  },
                }));
              }}
              minimizeWindow={() => {
                setLayerQueue((layerQueue) => bringToFront(layerQueue, w.id));
                setWindowExpAttr((windowExpAttr) => ({
                  ...windowExpAttr,
                  [w.id]: {
                    ...getdefaultWindowExpAttr(windowExpAttr, w),
                    minimize: windowExpAttr[w.id]?.minimize ? false : true,
                  },
                }));
              }}
              hideWindow={() => undefined}
            >
              <Window window={w} />
            </WindowProvider>
          ))}
          <BigWindowSuggester bigWindow={bigWindowSuggestion} />
        </div>
        <WindowTaskContext.Provider
          value={{
            windows: windowState,
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
