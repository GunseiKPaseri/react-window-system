import { useWindowTaskBar } from "../taskbar/taskcontext";

export function DefaultTaskBar() {
  const { windows, activateWindow, closeWindow } = useWindowTaskBar();
  return (
    <ul
      style={{
        margin: 0,
        padding: 0,
        listStyle: "none",
        overflowX: "scroll",
        overflowY: "hidden",
        scrollbarWidth: "thin",
        display: "flex",
      }}
    >
      {windows.map((w, i) => (
        <li
          key={w.id}
          style={{
            height: "1.2em",
            marginLeft: i === 0 ? 0 : -5,
            clipPath: "polygon(0% 100%, 5% 0%, 95% 0%, 100% 100%)",
          }}
        >
          <button
            type="button"
            style={{
              padding: 0,
              width: "100%",
              height: "100%",
              border: "none",
              display: "flex",
            }}
            onClick={() => activateWindow(w.id)}
          >
            <div
              style={{
                cursor: "pointer",
                userSelect: "none",
                width: "1em",
                paddingRight: "0.3em",
                paddingLeft: "0.3em",
                backgroundColor: w.isActive ? "#bbb" : "#ddd",
              }}
            >
              {w.icon}
            </div>
            <div
              style={{
                flex: 1,
                border: "none",
                cursor: "pointer",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                backgroundColor: w.isActive ? "#bbb" : "#ddd",
              }}
            >
              {w.title}
            </div>
            <button
              style={{
                userSelect: "none",
                border: "none",
                cursor: "pointer",
                width: 30,
                backgroundColor: w.isActive ? "#bbb" : "#ddd",
              }}
              type="button"
              onClick={() => closeWindow(w.id)}
            >
              ×
            </button>
          </button>
        </li>
      ))}
    </ul>
  );
}
