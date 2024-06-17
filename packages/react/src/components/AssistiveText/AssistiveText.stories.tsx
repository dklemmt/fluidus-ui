import type { Meta, StoryObj } from "@storybook/react";
import { AssistiveText } from "./AssistiveText";

const meta = {
  component: AssistiveText,
  argTypes: {
    children: { table: { disable: true } },
    className: { control: false },
  },
  args: {
    children:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  },
} satisfies Meta<typeof AssistiveText>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
