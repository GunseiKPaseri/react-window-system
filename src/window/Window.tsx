import type React from "react";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import { bigWindowSizeAsNum } from "../util";
import { useWindowSystemState } from "../windowSystem/WindowSystemProvider";
import type { BigWindow, WindowUIProps } from "../windowSystem/type";
import { WindowContext, type WindowPos, useWindow } from "./windowcontext";

const cancelSelector = (wsId: string, id: string) => {
  const escapeWsId = CSS.escape(wsId);
  const escapeId = CSS.escape(id);
  return `#${escapeWsId}-window-${escapeId}-body,#${escapeWsId}-window-${escapeId}-maximizebutton,#${escapeWsId}-window-${escapeId}-closebutton`;
};

const dragLength = 5;
const dragPosition = (position: {
  top: number;
  left: number;
  right: number;
  bottom: number;
}): BigWindow => {
  const { top, left, right, bottom } = position;
  if (top < dragLength) {
    if (left < dragLength) {
      return "top-left";
    }
    if (right < dragLength) {
      return "top-right";
    }
    return "top";
  }
  if (bottom < dragLength) {
    if (left < dragLength) {
      return "bottom-left";
    }
    if (right < dragLength) {
      return "bottom-right";
    }
    return "bottom";
  }
  if (left < dragLength) {
    return "left";
  }
  if (right < dragLength) {
    return "right";
  }
  return false;
};

export function Window(props: WindowUIProps) {
  const { window, ctrl, children, ...RndProps } = props;
  const { id, minimize, maximize, defaultWindowPos } = window;
  const {
    activateWindow = () => {},
    bigWindowSuggest = () => {},
    changeWindowExpAttrWithLayer = () => {},
    closeWindow = () => {},
    hideWindow = () => {},
    maximizeWindow: maximizeWindowCore = () => {},
    minimizeWindow: minimizeWindowCore = () => {},
  } = ctrl ?? {};
  const { windowAreaNode, wsId, windowTransitionDuration, memorySavingMode } =
    useWindowSystemState();
  // allow animation
  const [animateFlag, setAnimateFlag] = useState(false);
  const [prevMinimize, setPrevMinimize] = useState(minimize);
  if (minimize !== prevMinimize) {
    setPrevMinimize(minimize);
    setAnimateFlag(true);
  }
  useEffect(() => {
    if (animateFlag) {
      const timeoutId = setTimeout(() => {
        setAnimateFlag(false);
      }, windowTransitionDuration);
      return () => clearTimeout(timeoutId);
    }
  }, [animateFlag, windowTransitionDuration]);
  // maximize & minimize
  const [isDragging, setIsDragging] = useState(false);
  const [windowPos, setWindowPosCore] = useState(defaultWindowPos);
  const [windowPosBeforeMaximize, setWindowPosBeforeMaximize] =
    useState(defaultWindowPos);
  const maximizeWindow = (newMaximize?: BigWindow) => {
    const newMaximizeState = newMaximize ?? (maximize ? false : "full");
    if (newMaximizeState) {
      const maximizedSize = bigWindowSizeAsNum({
        bigWindow: newMaximizeState,
        parentWidth: windowAreaNode?.clientWidth ?? 0,
        parentHeight: windowAreaNode?.clientHeight ?? 0,
        minimize: minimize,
      });
      setWindowPosCore(maximizedSize);
    } else {
      setWindowPosCore(windowPosBeforeMaximize);
    }
    maximizeWindowCore(newMaximize);
    setAnimateFlag(true);
  };
  const minimizeWindow = () => {
    minimizeWindowCore();
    setAnimateFlag(true);
  };
  const setWindowPos: (windowPos: WindowPos & { dragging?: boolean }) => void =
    (props) => {
      const { dragging, ...newWindowPos } = props;
      if (!dragging) {
        setWindowPosBeforeMaximize(newWindowPos);
      }
      setWindowPosCore(newWindowPos);
    };
  const isWindowFixed = !(maximize === false || minimize);
  const windowRef = useRef<Rnd>(null);
  useEffect(() => {
    // minimize & maximize effect
    if (minimize) {
      windowRef.current?.updatePosition({
        x: (windowAreaNode?.clientWidth ?? 0) / 2,
        y: windowAreaNode?.clientHeight ?? 0,
      });
      windowRef.current?.updateSize({ width: 0, height: 0 });
      return;
    }
    if (maximize === false) {
      windowRef.current?.updatePosition(windowPosBeforeMaximize);
      windowRef.current?.updateSize(windowPosBeforeMaximize);
      return;
    }
    const maximizedSize = bigWindowSizeAsNum({
      bigWindow: maximize,
      parentWidth: windowAreaNode?.clientWidth ?? 0,
      parentHeight: windowAreaNode?.clientHeight ?? 0,
      minimize,
    });
    if (!windowRef.current) return;

    windowRef.current.updatePosition(maximizedSize);
    windowRef.current.updateSize(maximizedSize);
  }, [maximize, minimize, windowAreaNode, windowPosBeforeMaximize]);
  const provider = (
    <WindowContext.Provider
      value={{
        ...window,
        activateWindow,
        maximizeWindow,
        minimizeWindow,
        bigWindowSuggest,
        changeWindowExpAttrWithLayer,
        closeWindow,
        hideWindow,
        isDragging,
        windowPos,
        windowPosBeforeMaximize,
        windowNode: windowRef.current,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
  return (
    <Rnd
      ref={windowRef}
      {...RndProps}
      onMouseDown={activateWindow}
      disableDragging={isWindowFixed}
      enableResizing={!isWindowFixed}
      style={{
        userSelect: window.isActive ? "auto" : "none",
        display: minimize && !animateFlag ? "none" : "grid",
        gridTemplateRows: "auto 1fr",
        gridTemplateColumns: "1fr",
        ...props.style,
        transitionDuration: animateFlag
          ? `${windowTransitionDuration}ms`
          : "0ms",
      }}
      onResize={(_e, _dir, ref, _delta, position) => {
        setWindowPos({
          ...position,
          width: ref.style.width,
          height: ref.style.height,
          dragging: true,
        });
      }}
      onResizeStop={(_e, _d, ref, _delta, position) => {
        setWindowPos({
          ...position,
          width: ref.style.width,
          height: ref.style.height,
        });
      }}
      onDragStart={() => {
        setIsDragging(true);
      }}
      onDrag={(_e, dir) => {
        setWindowPos({ ...windowPos, x: dir.x, y: dir.y, dragging: true });
        if (windowAreaNode === null) return;
        const position = dragPosition({
          top: dir.y,
          left: dir.x,
          right: windowAreaNode.clientWidth - (dir.x + dir.node.offsetWidth),
          bottom: windowAreaNode.clientHeight - (dir.y + dir.node.offsetHeight),
        });
        bigWindowSuggest({ bigWindow: position });
      }}
      onDragStop={(_e, dir) => {
        const position =
          windowAreaNode !== null
            ? dragPosition({
                top: dir.y,
                left: dir.x,
                right:
                  windowAreaNode.clientWidth - (dir.x + dir.node.offsetWidth),
                bottom:
                  windowAreaNode.clientHeight - (dir.y + dir.node.offsetHeight),
              })
            : false;
        if (position) {
          changeWindowExpAttrWithLayer({ maximize: position });
          setAnimateFlag(true);
        } else {
          setWindowPos({ ...windowPos, x: dir.x, y: dir.y });
        }
        bigWindowSuggest({ bigWindow: false });
        setIsDragging(false);
      }}
      default={windowPos}
      minWidth={60}
      minHeight={24}
      bounds="parent"
      cancel={cancelSelector(wsId, id)}
    >
      {memorySavingMode && minimize ? <></> : provider}
    </Rnd>
  );
}

function MinimizeButton(props: React.HTMLAttributes<HTMLButtonElement>) {
  const { minimizeWindow, id, wsId, isDragging } = useWindow();
  return (
    <button
      {...props}
      type="button"
      id={`${wsId}-window-${id}-maximizebutton`}
      onClick={() => {
        if (isDragging) return;
        minimizeWindow();
      }}
      style={{
        width: 30,
        userSelect: "none",
        ...props.style,
      }}
    />
  );
}

function MaximizeButton(props: React.HTMLAttributes<HTMLButtonElement>) {
  const { maximizeWindow, id, wsId, isDragging } = useWindow();
  return (
    <button
      {...props}
      type="button"
      id={`${wsId}-window-${id}-maximizebutton`}
      onClick={() => {
        if (isDragging) return;
        maximizeWindow();
      }}
      style={{
        width: 30,
        userSelect: "none",
        ...props.style,
      }}
    />
  );
}

function CloseButton(props: React.HTMLAttributes<HTMLButtonElement>) {
  const { closeWindow, id, wsId, isDragging } = useWindow();
  return (
    <button
      {...props}
      type="button"
      id={`${wsId}-window-${id}-closebutton`}
      onClick={() => {
        if (isDragging) return;
        closeWindow();
      }}
      style={{
        width: 30,
        userSelect: "none",
        ...props.style,
      }}
    />
  );
}

function Title(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} style={{ flex: 1, ...props.style }} />;
}

function Icon(
  props: { children: ReactNode } & React.HTMLAttributes<HTMLDivElement>,
) {
  return (
    <div
      {...props}
      style={{
        width: 24,
        height: 24,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}

function Header(
  props: { children: ReactNode } & React.HTMLAttributes<HTMLDivElement>,
) {
  return (
    <div
      {...props}
      style={{
        width: "100%",
        height: 24,
        display: "flex",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}

Header.Icon = Icon;
Header.Title = Title;
Header.MaximizeButton = MaximizeButton;
Header.CloseButton = CloseButton;
Header.MinimizeButton = MinimizeButton;

function Body(
  props: { children: ReactNode } & React.HTMLAttributes<HTMLDivElement>,
) {
  const { id, wsId } = useWindow();
  return (
    <div
      {...props}
      id={`${wsId}-window-${id}-body`}
      style={{
        cursor: "auto",
        overflow: "auto",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}

Window.TitleBar = Header;
Window.Body = Body;
