import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Flex } from "../Flex";

const meta = {
  component: Button,
  argTypes: {
    children: { table: { disable: true } },
    className: { control: false },
  },
  args: {
    children: "Lorem ipsum",
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

const ButtonGroupTemplate: Story = {
  render: ({ ...args }) => (
    <Flex alignItems="center">
      <Button>Lorem ipsum</Button>
      <Button href="https://example.com">Lorem ipsum</Button>
    </Flex>
  ),
};

export const Default: Story = {};

export const Link: Story = { args: { href: "https://example.com/" } };

export const Disabled: Story = { args: { disabled: true } };

export const Group: Story = { ...ButtonGroupTemplate };
