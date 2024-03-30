import type React from "react";
import { type ReactNode, useEffect, useRef } from "react";
import { Rnd } from "react-rnd";
import type { Props as RndProps } from "react-rnd";
import { bigWindowSizeAsNum } from "../util";
import type { BigWindow } from "../windowSystem/type";
import { useWindow } from "./windowcontext";

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

export function Window(props: RndProps) {
  const {
    windowPos,
    id,
    wsId,
    activateWindow,
    maximize,
    minimize,
    bigWindowSuggest,
    changeWindowExpAttrWithLayer,
    windowAreaNode,
    setIsDragging,
    windowPosBeforeMaximize,
    setWindowPos,
    setWindowPosBeforeMaximize,
  } = useWindow();
  if (minimize) return <></>;
  const isWindowFixed = !(maximize === false || minimize);
  const windowRef = useRef<Rnd>(null);
  useEffect(() => {
    if (minimize) {
      windowRef.current?.updatePosition({ x: 0, y: 0 });
      windowRef.current?.updateSize({ width: 0, height: 0 });
      return;
    }
    if (maximize === false) {
      windowRef.current?.updatePosition(windowPosBeforeMaximize);
      windowRef.current?.updateSize(windowPosBeforeMaximize);
      return;
    }
    const custom = bigWindowSizeAsNum({
      bigWindow: maximize,
      parentWidth: windowAreaNode?.clientWidth ?? 0,
      parentHeight: windowAreaNode?.clientHeight ?? 0,
      minimize,
    });
    if (!windowRef.current) return;

    windowRef.current.updatePosition(custom);
    windowRef.current.updateSize(custom);
  }, [maximize, minimize, windowAreaNode, windowPosBeforeMaximize]);
  return (
    <Rnd
      ref={windowRef}
      {...props}
      onMouseDown={activateWindow}
      disableDragging={isWindowFixed}
      enableResizing={!isWindowFixed}
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gridTemplateColumns: "1fr",
        ...props.style,
      }}
      onResize={(_e, _dir, ref, _delta, _position) => {
        setWindowPos({
          ...windowPos,
          width: ref.style.width,
          height: ref.style.height,
        });
      }}
      onResizeStop={(_e, _d, ref) => {
        setWindowPos({
          ...windowPos,
          width: ref.style.width,
          height: ref.style.height,
        });
      }}
      onDragStart={() => {
        setIsDragging(true);
        setWindowPosBeforeMaximize(windowPos);
      }}
      onDrag={(_e, dir) => {
        setWindowPos({ ...windowPos, x: dir.x, y: dir.y });
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
      {props.children}
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
  const {
    maximizeWindow,
    id,
    wsId,
    isDragging,
    maximize,
    setWindowPos,
    windowPosBeforeMaximize,
  } = useWindow();
  return (
    <button
      {...props}
      type="button"
      id={`${wsId}-window-${id}-maximizebutton`}
      onClick={() => {
        if (isDragging) return;
        if (maximize !== false) {
          setWindowPos(windowPosBeforeMaximize);
        }
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
