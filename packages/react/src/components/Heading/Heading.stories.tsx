import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta = {
  component: Heading,
  argTypes: {
    children: { table: { disable: true } },
    className: { control: false },
    size: { control: "select" },
  },
  args: { children: "Heading" },
} satisfies Meta<typeof Heading>;
export default meta;
type Story = StoryObj<typeof meta>;

const AllSizesTemplate: Story = {
  render: ({ ...args }) => (
    <>
      <Heading>Heading (xlarge)</Heading>
      <Heading size="large">Heading (large)</Heading>
      <Heading size="medium">Heading (medium)</Heading>
      <Heading size="small">Heading (small)</Heading>
      <Heading size="xsmall">Heading (xsmall)</Heading>
    </>
  ),
};

export const Default: Story = {};

export const AllSizes: Story = { ...AllSizesTemplate };
