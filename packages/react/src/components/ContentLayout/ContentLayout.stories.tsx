import type { Meta, StoryObj } from "@storybook/react";
import { ContentLayout } from "./ContentLayout";
import { ContentSection } from "./ContentSection";
import { ReactNode } from "react";

const Box = ({ children }: { children?: ReactNode }) => {
  return (
    <div
      style={{
        height: 32,
        padding: "5px 10px",
        textAlign: "center",
        verticalAlign: "middle",
        backgroundColor: "var(--fluidus-color-orange-300)",
        borderRadius: 4,
      }}
    >
      {children}
    </div>
  );
};

const meta = {
  title: "layout/ContentLayout",
  component: ContentLayout,
  argTypes: {
    children: { table: { disable: true } },
    className: { control: false },
    size: { control: "select" },
    style: { control: false },
  },
  args: {},
} satisfies Meta<typeof ContentLayout>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => (
    <ContentLayout {...args}>
      <Box />
    </ContentLayout>
  ),
};

const AllSizesTemplate: Story = {
  render: ({ ...args }) => (
    <>
      <ContentLayout>
        <ContentSection size="full">
          <Box>Full</Box>
        </ContentSection>
      </ContentLayout>
      <ContentLayout>
        <Box>Content (Default)</Box>
      </ContentLayout>
      <ContentLayout size="wide">
        <Box>Wide</Box>
      </ContentLayout>
      <ContentLayout size="narrow">
        <Box>Narrow</Box>
      </ContentLayout>
    </>
  ),
};

export const Default: Story = { ...Template };

export const Wide: Story = { ...Template, args: { size: "wide" } };

export const Narrow: Story = { ...Template, args: { size: "narrow" } };

export const AllSizes: Story = { ...AllSizesTemplate };
