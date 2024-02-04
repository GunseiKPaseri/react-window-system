import React, { type ReactNode } from "react";
import { Rnd } from "react-rnd";
import type { Props as RndProps } from "react-rnd";
import { bigWindowSize } from "../util";
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
    resizeWindow,
    windowAreaNode,
  } = useWindow();
  if (minimize) return <></>;
  return maximize ? (
    <div
      onMouseDown={activateWindow}
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gridTemplateColumns: "1fr",
        ...props.style,
        ...bigWindowSize({ bigWindow: maximize }),
      }}
    >
      {props.children}
    </div>
  ) : (
    <Rnd
      {...props}
      onMouseDown={activateWindow}
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        gridTemplateColumns: "1fr",
        ...props.style,
      }}
      onResize={(_e, _dir, ref, _delta, _position) => {
        resizeWindow({
          ...windowPos,
          width: ref.style.width,
          height: ref.style.height,
        });
      }}
      onResizeStop={(_e, _d, ref) => {
        resizeWindow({
          ...windowPos,
          width: ref.style.width,
          height: ref.style.height,
        });
      }}
      onDrag={(_e, dir) => {
        resizeWindow({ ...windowPos, x: dir.x, y: dir.y });
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
        resizeWindow({ ...windowPos, x: dir.x, y: dir.y }, position);
        bigWindowSuggest({ bigWindow: false });
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
  const { minimizeWindow, id, wsId } = useWindow();
  return (
    <button
      {...props}
      type="button"
      id={`${wsId}-window-${id}-maximizebutton`}
      onMouseUp={minimizeWindow}
      style={{
        width: 30,
        userSelect: "none",
        ...props.style,
      }}
    />
  );
}

function MaximizeButton(props: React.HTMLAttributes<HTMLButtonElement>) {
  const { maximizeWindow, id, wsId } = useWindow();
  return (
    <button
      {...props}
      type="button"
      id={`${wsId}-window-${id}-maximizebutton`}
      onMouseUp={maximizeWindow}
      style={{
        width: 30,
        userSelect: "none",
        ...props.style,
      }}
    />
  );
}

function CloseButton(props: React.HTMLAttributes<HTMLButtonElement>) {
  const { closeWindow, id, wsId } = useWindow();
  return (
    <button
      {...props}
      type="button"
      id={`${wsId}-window-${id}-closebutton`}
      onMouseUp={closeWindow}
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
