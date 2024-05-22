import type { Meta, StoryObj } from "@storybook/react";
import { BlockQuote } from "./BlockQuote";

const meta = {
  component: BlockQuote,
  argTypes: {
    children: { table: { disable: true } },
    className: { control: false },
  },
  args: {
    children: (
      <>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et.
      </>
    ),
  },
} satisfies Meta<typeof BlockQuote>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSource: Story = { args: { source: "Cicero - Liber Primus" } };
