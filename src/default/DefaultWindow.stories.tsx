import type { Meta, StoryObj } from "@storybook/react";
import { WindowOnly } from "../util/WindowOnly";
import type { WindowExpAttrWithLayer } from "../windowSystem/type";
//import { fn } from '@storybook/test';
import { DefaultWindow } from "./DefaultWindow";

const WrappedDefaultWindow = (props: WindowExpAttrWithLayer) => (
  <WindowOnly window={props}>
    <DefaultWindow window={props} />
  </WindowOnly>
);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Window/DefaultWindow",
  component: WrappedDefaultWindow,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    maximize: {
      control: {
        type: "select",
      },
      type: {
        name: "enum",
        value: [
          "full",
          "left",
          "right",
          "top",
          "bottom",
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right",
          "false",
        ],
      },
      options: [
        "full",
        "left",
        "right",
        "top",
        "bottom",
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
        false,
      ],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //args: { onClick: fn() },
} satisfies Meta<typeof WrappedDefaultWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    id: "1",
    defaultWindowPos: {
      x: 50,
      y: 50,
      width: 300,
      height: 300,
    },
    title: "Window1",
    icon: "🖼",
    header: "Header",
    body: "Hello",
    layerIndex: 0,
    isActive: true,
    closed: false,
    maximize: false,
    minimize: false,
  },
};
