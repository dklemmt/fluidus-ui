import { Sun } from "lucide-react";
import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta = {
  component: Divider,
  argTypes: {},
} satisfies Meta<typeof Divider>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithText: Story = {
  args: { children: <>Lorem ipsum</> },
};

export const WithIcon: Story = {
  args: { children: <Sun size={24} /> },
};
