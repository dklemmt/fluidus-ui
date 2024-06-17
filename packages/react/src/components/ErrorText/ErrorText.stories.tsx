import type { Meta, StoryObj } from "@storybook/react";
import { ErrorText } from "./ErrorText";

const meta = {
  component: ErrorText,
  argTypes: {
    children: { table: { disable: true } },
    className: { control: false },
  },
  args: {
    children:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  },
} satisfies Meta<typeof ErrorText>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
