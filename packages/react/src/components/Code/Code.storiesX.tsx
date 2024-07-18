import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "./Code";

const meta = {
  component: Code,
  argTypes: {
    children: { table: { disable: true } },
    className: { control: false },
  },
  args: {
    children:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
  },
} satisfies Meta<typeof Code>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => (
    <div {...args}>
      Lorem ipsum <Code>npm i</Code> dolor sit amet, consetetur sadipscing
      elitr, sed diam nonumy eirmod tempor invidunt ut labore et.
    </div>
  ),
};

const multilineTemplate: Story = {
  render: ({ ...args }) => (
    <pre>
      <Code>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et.
      </Code>
    </pre>
  ),
};

export const Default: Story = { ...Template };

export const Multiline: Story = { ...multilineTemplate };
