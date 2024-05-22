import { ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ContentSection } from "./ContentSection";
import { ContentLayout } from "../ContentLayout";

const Box = ({ children }: { children?: ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "var(--fluidus-size-space-medium)",
        backgroundColor: "var(--fluidus-color-orange-300)",
        borderRadius: 4,
      }}
    >
      {children}
    </div>
  );
};

const meta = {
  title: "layout/ContentSection",
  component: ContentSection,
  argTypes: {
    children: { table: { disable: true } },
    className: { control: false },
    size: { control: "select" },
  },
  args: {},
} satisfies Meta<typeof ContentSection>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => (
    <ContentLayout>
      <ContentSection {...args}>
        <Box />
      </ContentSection>
    </ContentLayout>
  ),
};

const AllSizesTemplate: Story = {
  render: ({ ...args }) => (
    <>
      <ContentLayout>
        <ContentSection
          size="full"
          style={{ backgroundColor: "var(--fluidus-color-orange-100)" }}
        >
          <Box>Full</Box>
        </ContentSection>
      </ContentLayout>
      <ContentLayout>
        <ContentSection
          style={{ backgroundColor: "var(--fluidus-color-orange-100)" }}
        >
          <Box>Content (Default)</Box>
        </ContentSection>
      </ContentLayout>
      <ContentLayout>
        <ContentSection
          size="wide"
          style={{ backgroundColor: "var(--fluidus-color-orange-100)" }}
        >
          <Box>Wide</Box>
        </ContentSection>
      </ContentLayout>
      <ContentLayout>
        <ContentSection
          size="narrow"
          style={{ backgroundColor: "var(--fluidus-color-orange-100)" }}
        >
          <Box>Narrow</Box>
        </ContentSection>
      </ContentLayout>
    </>
  ),
};

const AllSizesWithPaddingTemplate: Story = {
  render: ({ ...args }) => (
    <div
      style={{
        paddingTop: "var(--fluidus-size-space-small-large",
        paddingBottom: "var(--fluidus-size-space-small-large",
        backgroundColor: "var(--fluidus-color-orange-100)",
      }}
    >
      <ContentLayout
        size="wide-padding"
        style={{
          paddingTop: "var(--fluidus-content-layout-padding)",
          paddingBottom: "var(--fluidus-content-layout-padding)",
          backgroundColor: "hsl(0deg 0% 100% / 70%)",
        }}
      >
        <ContentSection>
          <Box>Wide Padding</Box>
        </ContentSection>
        <ContentSection>
          <Box>Wide Padding</Box>
        </ContentSection>
      </ContentLayout>
      <ContentLayout
        size="narrow-padding"
        style={{
          paddingTop: "var(--fluidus-content-layout-padding)",
          paddingBottom: "var(--fluidus-content-layout-padding)",
          backgroundColor: "hsl(0deg 0% 100% / 70%)",
        }}
      >
        <ContentSection>
          <Box>Narrow Padding</Box>
        </ContentSection>
        <ContentSection>
          <Box>Narrow Padding</Box>
        </ContentSection>
      </ContentLayout>
    </div>
  ),
};

export const Default: Story = { ...Template };

export const Wide: Story = { ...Template, args: { size: "wide" } };

export const Narrow: Story = { ...Template, args: { size: "narrow" } };

export const AllSizes: Story = { ...AllSizesTemplate };

export const AllSizesWithPadding: Story = { ...AllSizesWithPaddingTemplate };
