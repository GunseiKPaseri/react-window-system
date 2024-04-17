import { Window } from "../window/Window";
import type { WindowUIProps } from "../windowSystem/type";

export const DefaultWindow = (props: WindowUIProps) => {
  const { window } = props;
  return (
    <Window
      {...props}
      style={{
        position: "absolute",
        zIndex: window.layerIndex,
        border: "1px solid #000",
        borderRadius: "4px",
      }}
    >
      <Window.TitleBar
        style={{
          backgroundColor: window.isActive ? "#99f" : "#ccf",
        }}
      >
        <Window.TitleBar.Icon>{window.icon}</Window.TitleBar.Icon>
        <Window.TitleBar.Title
          style={{
            paddingLeft: 4,
          }}
        >
          {window.header ?? window.title}
        </Window.TitleBar.Title>
        <Window.TitleBar.MinimizeButton>_</Window.TitleBar.MinimizeButton>
        <Window.TitleBar.MaximizeButton>
          {window.maximize ? "❒" : "□"}
        </Window.TitleBar.MaximizeButton>
        <Window.TitleBar.CloseButton>×</Window.TitleBar.CloseButton>
      </Window.TitleBar>
      <Window.Body
        style={{
          backgroundColor: "#fff",
        }}
      >
        {window.body}
      </Window.Body>
    </Window>
  );
};
