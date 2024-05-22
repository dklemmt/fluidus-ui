import type { Meta, StoryObj } from "@storybook/react";
import { ScrollToTop } from "./ScrollToTop";

const meta = {
  component: ScrollToTop,
  argTypes: {
    className: { control: false },
  },
  args: {},
} satisfies Meta<typeof ScrollToTop>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
