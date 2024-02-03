import { TaskBar } from "../taskbar/TaskBar";
import { useWindowTaskBar } from "../taskbar/taskcontext";

export function DefaultTaskBar() {
  const { windows } = useWindowTaskBar();
  return (
    <TaskBar>
      {windows.map((w, i) => (
        <TaskBar.List
          key={w.id}
          w={w}
          style={{
            width: 110,
            marginLeft: i === 0 ? 0 : -5,
            clipPath: "polygon(0% 100%, 5% 0%, 95% 0%, 100% 100%)",
          }}
        >
          <TaskBar.List.Body
            style={{
              border: "none",
              cursor: "pointer",
              paddingLeft: 10,
              backgroundColor: w.isActive ? "#bbb" : "#ddd",
            }}
          >
            {w.header}
          </TaskBar.List.Body>
          <TaskBar.List.Close
            style={{
              border: "none",
              cursor: "pointer",
              width: 30,
              backgroundColor: w.isActive ? "#bbb" : "#ddd",
            }}
          >
            ×
          </TaskBar.List.Close>
        </TaskBar.List>
      ))}
    </TaskBar>
  );
}
