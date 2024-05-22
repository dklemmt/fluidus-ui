import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { Paragraph } from "../Paragraph";

const meta = {
  title: "forms/Checkbox",
  component: Checkbox,
  argTypes: {
    children: { table: { disable: true } },
    className: { control: false },
  },
  args: {
    children: <>Lorem ipsum dolor sit amet</>,
  },
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Multiline: Story = {
  args: {
    children: (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et.
      </>
    ),
  },
};
