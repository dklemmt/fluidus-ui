import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@components/Textarea";

const meta = {
  title: "forms/Textarea",
  component: Textarea,
  argTypes: {
    className: { control: false },
    // type: { control: "select" },
  },
  args: {
    label: "Label",
  },
} satisfies Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AssistiveText: Story = {
  args: { assistiveText: "Assistive text" },
};
export const Disabled: Story = {
  args: { disabled: true },
};

export const Error: Story = {
  args: { error: true },
};

export const ErrorMessage: Story = {
  args: {
    error: true,
    errorText: "You must fill in the field.",
  },
};
