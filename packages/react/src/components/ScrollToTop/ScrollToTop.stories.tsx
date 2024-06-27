import type { Meta, StoryObj } from "@storybook/react";
import { ScrollToTop } from "./ScrollToTop";

const meta = {
  component: ScrollToTop,
  argTypes: {},
  args: {},
  decorators: [
    (Story) => (
      <div style={{ height: "200px" }}>
        <p>Please scroll down the page.</p>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ScrollToTop>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
