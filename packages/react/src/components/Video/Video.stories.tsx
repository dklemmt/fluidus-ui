import type { Meta, StoryObj } from "@storybook/react";
import { Video } from "./Video";

const meta = {
  component: Video,
  argTypes: {
    aspectRatio: { control: "select" },
    className: { control: false },
    objectFit: { control: "select" },
    preload: { control: "select" },
  },
  args: {
    source: [
      {
        src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        type: "mp4",
      },
    ],
  },
} satisfies Meta<typeof Video>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };

export const WithPoster: Story = {
  args: { poster: "https://picsum.photos/id/82/640/480" },
};
