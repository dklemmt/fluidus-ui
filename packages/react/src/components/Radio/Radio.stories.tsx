import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

const meta = {
  title: "forms/Radio",
  component: Radio,
  argTypes: {
    children: { table: { disable: true } },
    className: { control: false },
  },
  args: {
    children: "Lorem ipsum dolor sit amet",
  },
} satisfies Meta<typeof Radio>;
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
  args: { checked: true, onChange: () => {} },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Error: Story = {
  args: { error: true },
};

export const ErrorMessage: Story = {
  args: { error: true, errorText: "You must tick the radio." },
};
