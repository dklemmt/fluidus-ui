import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "./Paragraph";

const meta = {
  title: "typography/Paragraph",
  component: Paragraph,
  argTypes: {
    children: { table: { disable: true } },
    className: { control: false },
    size: { control: "select" },
  },
  args: {
    children:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  },
} satisfies Meta<typeof Paragraph>;
export default meta;
type Story = StoryObj<typeof meta>;

const AllSizesTemplate: Story = {
  render: ({ ...args }) => (
    <>
      <Paragraph size="large">{meta.args.children} (large)</Paragraph>
      <Paragraph>{meta.args.children} (medium)</Paragraph>
      <Paragraph size="small">{meta.args.children} (small)</Paragraph>
      <Paragraph size="xsmall">{meta.args.children} (xsmall)</Paragraph>
    </>
  ),
};

export const Default: Story = {};

export const AllSizes: Story = { ...AllSizesTemplate };
