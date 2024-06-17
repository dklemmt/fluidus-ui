import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "../Radio";
import { RadioGroup } from "./RadioGroup";

const meta = {
  title: "forms/RadioGroup",
  component: RadioGroup,
  argTypes: {
    children: { table: { disable: true } },
    className: { control: false },
    orientation: { control: "select" },
  },
  args: {
    name: "radio-group",
  },
  render: ({ ...args }) => (
    <RadioGroup {...args}>
      <Radio value="first">Lorem ipsum dolor sit amet</Radio>
      <Radio value="second">Lorem ipsum dolor sit amet</Radio>
      <Radio value="third">Lorem ipsum dolor sit amet</Radio>
    </RadioGroup>
  ),
} satisfies Meta<typeof RadioGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };

export const DefaultSelected: Story = {
  args: { name: "radio-group-selected", defaultValue: "second" },
};

export const Orientation: Story = {
  args: { name: "radio-group-orientation", orientation: "horizontal" },
};

export const AssistiveText: Story = {
  args: { name: "radio-group-assistive", assistiveText: "Assistive text" },
};

export const Disabled: Story = {
  args: { name: "radio-group-disabled", disabled: true },
};

export const Error: Story = {
  args: { name: "radio-group-error", error: true },
};

export const ErrorMessage: Story = {
  args: {
    name: "radio-group-error-message",
    error: true,
    errorText: "You must select one option.",
  },
};
