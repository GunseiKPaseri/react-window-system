import { useState } from "react";
import { useWindow } from "./window/windowcontext";
import { WindowSystem } from "./windowSystem/WindowSystem";
import type { WindowAttr } from "./windowSystem/type";

const WindowBody = () => {
  const { windowPos } = useWindow();
  const [count, setCount] = useState(0);
  return (
    <>
      {`x: ${windowPos.x}, y: ${windowPos.y}`}
      <br />
      {`${windowPos.width} x ${windowPos.height}`}
      <br />
      冬の朝、雪が降り積もる庭で、小さな鳥たちが飛び跳ねています。白い雪の上に、彼らの足跡がくっきりと残ります。寒さに耐えながら、彼らは飛び立つ瞬間を待っているようです。風が冷たく、木々は凍りついていますが、鳥たちは生命力に満ちています。その小さな翼は、自由を求めて空に向かって伸びています。
      この冬の朝、私たちは鳥たちから学ぶことができます。寒さや困難にもかかわらず、彼らは飛び立つ勇気を持っています。私たちも同じように、自分の夢や目標に向かって進む勇気を持ちましょう。雪の中で足跡を残すように、私たちも自分の人生に意味を刻みましょう。
      <br />
      <button type="button" onClick={() => setCount((cnt) => cnt + 1)}>
        Good {count}
      </button>
    </>
  );
};

const makeWindow = (id: number): WindowAttr => {
  return {
    id: `${Math.random()}`,
    defaultWindowPos: {
      x: 300 * Math.random(),
      y: 250 * Math.random(),
      height: 200,
      width: 200,
    },
    title: `タイトル${id}`,
    icon: <span>{Math.random() > 0.5 ? "🍓" : "🍌"}</span>,
    header: <strong>{`へっだ${id}`}</strong>,
    body: <WindowBody />,
  };
};

function App() {
  const [windows, setWindows] = useState<WindowAttr[]>([
    makeWindow(1),
    makeWindow(2),
  ]);
  const [count, setCount] = useState(2);
  const [memorySavingMode, setMemorySavingMode] = useState(false);
  const [shortcutKey, setShortcutKey] = useState(true);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setWindows((windows) => [...windows, makeWindow(count + 1)]);
          setCount((count) => count + 1);
        }}
      >
        add
      </button>
      <label>
        <input
          type="checkbox"
          checked={memorySavingMode}
          onChange={() => setMemorySavingMode((v) => !v)}
        />
        Saving Mode
      </label>
      <label>
        <input
          type="checkbox"
          checked={shortcutKey}
          onChange={() => setShortcutKey((v) => !v)}
        />
        Shortcut Key
      </label>
      <WindowSystem
        windows={windows}
        style={{
          width: 500,
          height: 500,
        }}
        memorySavingMode={memorySavingMode}
        shortcutKey={shortcutKey}
      />
    </>
  );
}

export default App;
