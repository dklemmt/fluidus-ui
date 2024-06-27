import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "forms/Checkbox",
  component: Checkbox,
  argTypes: {
    children: { table: { disable: true } },
    className: { control: false },
  },
  args: {
    children: "Lorem ipsum dolor sit amet",
  },
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Multiline: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  },
};

export const AssistiveText: Story = {
  args: { assistiveText: "Assistive text" },
};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const Disabled: Story = { args: { disabled: true } };

export const Error: Story = { args: { error: true } };

export const ErrorMessage: Story = {
  args: { error: true, errorText: "You must tick the checkbox." },
};
