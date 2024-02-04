# 🪟 React Window System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=square)](https://makeapullrequest.com)
[![Created by GunseiKPaseri](https://img.shields.io/badge/created%20by-@GunseiKPaseri-00ACEE.svg)](https://twitter.com/GunseiKPaseri)
[![npm version](https://img.shields.io/npm/v/react-window-system?logo=npm)](https://badge.fury.io/js/react-window-system)


React Window System is a reproduction of the Window system using React. It provides a Window system.

- maximize
- minimize
- close
- taskbar
- Snap (like windows)

## How to use

Demo: [CodeSandBox](https://codesandbox.io/p/sandbox/react-window-system-p75t2w) 

```sh
npm install react-window-system
```


See [Example.tsx](./src/Example.tsx)

```tsx
const windows = [
  {
    id: `${Math.random()}`,
    defaultWindowPos: {
      x: 300 * Math.random(),
      y: 250 * Math.random(),
      height: 200,
      width: 200,
    },
    header: <strong>Title</strong>,
    body: <>Example</>,
  }
]
const WindowSystem = () => {
  <WindowSystem
    windows={windows}
    style={{
      width: 500,
      height: 500,
    }}
  />
}
```

## Documentation

### WindowSystem

The `<WindowSystem>` component will render the window system environment. Please use the element's styles to specify the width and height.

The windows to be displayed can be specified using the `windows` property. Please manage it externally using useState or similar state management techniques.

#### windows (required)

| Property | Type | Description |
| --- | --- | --- |
| `id` | `string` | The unique identifier of the window. |
| `defaultWindowPos` | `{ x: number, y: number, height: number, width: number }` | The initial position and size of the window. |
| `header` | `ReactNode` | The title of the window. |
| `body` | `ReactNode` | The content of the window. |

### Window

In the components specified for the header and body, you can use the `useWindow` hook to retrieve window information.

By using the `useWindow` hook, you can access window-related information such as window state, position, and size within the specified components. This allows you to dynamically update and interact with the windows in the WindowSystem component.

```tsx
  const properties = useWindow()
```

| Property | Type | Description |
| --- | --- | --- |
| `windowAreaNode` | `React.RefObject<HTMLDivElement>` | The reference to the window area. (Moveable area from `<WindowSystem>` excluding the taskbar) |
| `windowProviderNode` | `React.RefObject<HTMLDivElement>` | The reference to the `<WindowSystem>` |
| `layerQueue` | `string[]` | List of window IDs sorted in stacked order. |
| `wsId` | `string` | The ID of the `<WindowSystem>`. |
| `closed` | `boolean` | Whether the window is closed. |
| `id` | `string` | The unique identifier of the window. |
| `defaultWindowPos` | `{ x: number, y: number, height: number, width: number }` | The initial position and size of the window. |
| `header` | `ReactNode` | The title of the window. |
| `body` | `ReactNode` | The content of the window. |
| `maximized` | `boolean` | Whether the window is maximized. |
| `minimized` | `boolean` | Whether the window is minimized. |
| `windowPos` | `{ x: number, y: number, height: number, width: number }` | The position and size of the window. |
| `layerIndex` | `number` | The index of the window in the layerQueue. |
| `isActive` | `boolean` | Whether the window is active. |
| `bigWindowSuggest` | `{bigWindow: string}` | Show size when maximized at Snap. (for developper) |
| `activeWindow` | `string` | The ID of the active window. |
| `closeWindow` | `() => void` | A function to close the window. |
| `maximizeWindow` | `() => void` | A function to maximize the window. |
| `minimizeWindow` | `() => void` | A function to minimize the window. |
| `resizeWindow` | `(ref: {x: number, y: number, height: number, width: number}, maximize?: string) => void` | A function to resize the window. |
| `hideWindow` | `() => void` | A function to hide the window. |

### Customization

You can define custum `Window` & `TaskBar`. See [DefaultWindow.tsx](./src/default/DefaultWindow.tsx), [DefaultTaskBar.tsx](./src/default/DefaultTaskBar.tsx).

```tsx
import { Window } from "../window/Window";
import type { WindowUIProps } from "../windowSystem/type";

export const CustomWindow = (props: WindowUIProps) => {
  const { window, ...WindowAttr } = props;
  return (
    <Window
      {...WindowAttr}
      window={window}
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
        <Window.TitleBar.Title
          style={{
            paddingLeft: 4,
          }}
        >
          {window.header}
        </Window.TitleBar.Title>
        <Window.TitleBar.MinimizeButton>_</Window.TitleBar.MinimizeButton>
        <Window.TitleBar.MaximizeButton>
          {window.maximize === "full" ? "❒" : "□"}
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

const CustomWindowSystem = () => {
  return (
    <WindowSystem
      windows={windows}
      style={{
        width: 500,
        height: 500,
      }}
      Window={CustomWindow}
    />
  );
};

```


## Development

To participate in the development, please make sure to install [bun](https://bun.sh/) as your development environment.

### Install
```bash
bun install
```

### Run develop server
```bash
bun run dev
```

### Check pre-commit

Before committing, please execute the following:

```bash
bun run pre-commit
```
