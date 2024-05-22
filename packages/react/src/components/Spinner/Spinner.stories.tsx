import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta = {
  component: Spinner,
  argTypes: {
    ariaLabel: {
      if: { arg: "label", truthy: false },
      table: { category: "Accessibility" },
    },
    className: { control: false },
    size: { control: "select" },
  },
  args: {},
} satisfies Meta<typeof Spinner>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = { args: { size: "small" } };
