import type { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import { Flex } from "./Flex";

const Box = ({ children }: { children?: ReactNode }) => {
  return (
    <div
      style={{
        width: 125,
        minWidth: 125,
        height: 32,
        padding: "5px 10px",
        textAlign: "center",
        backgroundColor: "var(--fluidus-color-orange-300)",
        borderRadius: 4,
      }}
    >
      {children}
    </div>
  );
};

const meta = {
  title: "layout/Flex",
  component: Flex,
  argTypes: {
    align: { control: "select", if: { arg: "wrap", neq: "nowrap" } },
    children: { table: { disable: true } },
    className: { control: false },
    direction: { control: "select" },
    gap: { control: "select" },
    justify: { control: "select" },
    wrap: { control: "select" },
  },
  args: {
    children: (
      <>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ height: "240px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Flex>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Wrap: Story = {
  args: {
    gap: "medium",
    wrap: "wrap",
    children: (
      <>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box>
        <Box>7</Box>
        <Box>8</Box>
        <Box>9</Box>
        <Box>10</Box>
      </>
    ),
  },
};

export const WrapReverse: Story = {
  args: {
    gap: "medium",
    wrap: "wrap-reverse",
    children: (
      <>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box>
        <Box>7</Box>
        <Box>8</Box>
        <Box>9</Box>
        <Box>10</Box>
      </>
    ),
  },
};
