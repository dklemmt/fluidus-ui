import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta = {
  component: Link,
  argTypes: {
    children: { table: { disable: true } },
    className: { control: false },
  },
  args: {
    children: <>Lorem ipsum</>,
    href: "",
  },
} satisfies Meta<typeof Link>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
