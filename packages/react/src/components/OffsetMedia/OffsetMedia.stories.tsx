import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "@components/Paragraph";
import { OffsetMedia } from "./OffsetMedia";

const meta = {
  component: OffsetMedia,
  argTypes: {
    className: { control: false },
    children: { table: { disable: true } },
  },
  args: {
    children: (
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi.
      </Paragraph>
    ),
    // image: { src: "https://picsum.photos/320/200" },
  },
} satisfies Meta<typeof OffsetMedia>;
export default meta;
type Story = StoryObj<typeof meta>;

const AllSizesTemplate: Story = {
  render: ({ ...args }) => (
    <>
      <OffsetMedia
        image={{ src: "https://picsum.photos/id/82/320/240" }}
        media={{ size: "large" }}
      >
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </Paragraph>
      </OffsetMedia>
      <OffsetMedia
        media={{ position: "right", size: "large" }}
        video={{
          source: [
            {
              src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              type: "mp4",
            },
          ],
        }}
      >
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </Paragraph>
      </OffsetMedia>
      <OffsetMedia image={{ src: "https://picsum.photos/id/82/320/240" }}>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </Paragraph>
      </OffsetMedia>
      <OffsetMedia
        media={{ position: "right" }}
        video={{
          source: [
            {
              src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              type: "mp4",
            },
          ],
        }}
      >
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </Paragraph>
      </OffsetMedia>
      <OffsetMedia
        image={{ src: "https://picsum.photos/id/82/320/240" }}
        media={{ size: "small" }}
      >
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </Paragraph>
      </OffsetMedia>
      <OffsetMedia
        media={{ position: "right", size: "small" }}
        video={{
          source: [
            {
              src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              type: "mp4",
            },
          ],
        }}
      >
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </Paragraph>
      </OffsetMedia>
      <OffsetMedia
        image={{ src: "https://picsum.photos/id/82/320/240" }}
        media={{ position: "right", size: "large" }}
      >
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </Paragraph>
      </OffsetMedia>
      <OffsetMedia
        media={{ size: "large" }}
        video={{
          source: [
            {
              src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              type: "mp4",
            },
          ],
        }}
      >
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </Paragraph>
      </OffsetMedia>
      <OffsetMedia
        image={{ src: "https://picsum.photos/id/82/320/240" }}
        media={{ position: "right" }}
      >
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </Paragraph>
      </OffsetMedia>
      <OffsetMedia
        video={{
          source: [
            {
              src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              type: "mp4",
            },
          ],
        }}
      >
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </Paragraph>
      </OffsetMedia>
      <OffsetMedia
        image={{ src: "https://picsum.photos/id/82/320/240" }}
        media={{ position: "right", size: "small" }}
      >
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </Paragraph>
      </OffsetMedia>
      <OffsetMedia
        media={{ size: "small" }}
        video={{
          source: [
            {
              src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              type: "mp4",
            },
          ],
        }}
      >
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </Paragraph>
      </OffsetMedia>
    </>
  ),
};

export const Default: Story = {
  args: { image: { src: "https://picsum.photos/id/82/320/240" } },
};

export const ImageRight: Story = {
  args: {
    image: { src: "https://picsum.photos/id/82/320/240" },
    media: { position: "right" },
  },
};

export const WithHalo: Story = {
  args: {
    image: { src: "https://picsum.photos/id/82/320/240" },
    media: { halo: true },
  },
};

export const Video: Story = {
  args: {
    video: {
      source: [
        {
          src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          type: "mp4",
        },
      ],
    },
  },
};

export const VideoRight: Story = {
  args: {
    media: { position: "right" },
    video: {
      source: [
        {
          src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          type: "mp4",
        },
      ],
    },
  },
};

export const VideoWithHalo: Story = {
  args: {
    media: { halo: true },
    video: {
      source: [
        {
          src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          type: "mp4",
        },
      ],
    },
  },
};

export const AllSizes: Story = { ...AllSizesTemplate };
