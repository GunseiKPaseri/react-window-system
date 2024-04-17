import type { WindowExpAttrWithLayer } from "../windowSystem/type";
import { useWindowTaskBar, useWindowTaskItem } from "./taskcontext";
import { WindowTaskItemContext } from "./taskcontext";

function TaskList(
  props: React.HTMLAttributes<HTMLLIElement> & { w: WindowExpAttrWithLayer },
) {
  const { w, ...liProps } = props;
  const { activateWindow } = useWindowTaskBar();
  return (
    <WindowTaskItemContext.Provider value={{ w }}>
      <li
        {...liProps}
        style={{ width: 100, display: "flex", ...props.style }}
        onClick={() => activateWindow(w.id)}
      />
    </WindowTaskItemContext.Provider>
  );
}

function Icon(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} style={{ ...props.style }} />;
}

function Body(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} style={{ flex: 1, ...props.style }} />;
}

function TaskClose(props: React.HTMLAttributes<HTMLButtonElement>) {
  const { closeWindow } = useWindowTaskBar();
  const { w } = useWindowTaskItem();
  return <button {...props} type="button" onClick={() => closeWindow(w.id)} />;
}

export function TaskBar(props: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <div
      style={{
        display: "flex",
        overflowX: "scroll",
        scrollbarWidth: "thin",
      }}
    >
      <ul
        {...props}
        style={{
          margin: 0,
          padding: 0,
          listStyle: "none",
          display: "flex",
          ...props.style,
        }}
      />
    </div>
  );
}

TaskList.Icon = Icon;
TaskList.Body = Body;
TaskList.Close = TaskClose;
TaskBar.List = TaskList;
