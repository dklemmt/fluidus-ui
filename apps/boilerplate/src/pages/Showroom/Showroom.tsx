import { lazy } from "react";
import {
  AssistiveText,
  BlockQuote,
  Button,
  Checkbox,
  ContentLayout,
  Divider,
  ErrorText,
  Heading,
  Image,
  Input,
  Link,
  OffsetMedia,
  Paragraph,
  Radio,
  Spinner,
  Textarea,
  Video,
} from "@fluidus-ui/react";

export const Component = () => (
  <ContentLayout>
    <Heading>Showroom</Heading>
    <Paragraph>
      The showroom provides an overview of all available components. It serves
      as an additional reference and demonstrates the use of Fluidus UI
      components in an app environment.
    </Paragraph>
    <Heading size="small">Assistive Text</Heading>
    <AssistiveText>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor.
    </AssistiveText>
    <Heading size="small">Block Quote</Heading>
    <BlockQuote source="Cicero - Liber Primus">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et.
    </BlockQuote>
    <Heading size="small">Button</Heading>
    <Button>Lorem ipsum</Button>
    <Heading size="small">Checkbox</Heading>
    <Checkbox>Lorem ipsum</Checkbox>
    <Heading size="small">Divider</Heading>
    <Divider />
    <Heading size="small">Error Text</Heading>
    <ErrorText>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et.
    </ErrorText>
    <Heading size="small">Heading</Heading>
    <Heading>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Heading>
    <Heading size="large">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Heading>
    <Heading size="medium">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Heading>
    <Heading size="small">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Heading>
    <Heading size="xsmall">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Heading>
    <Heading size="small">Image</Heading>
    <Image src="https://picsum.photos/id/82/640/480" />
    <Heading size="small">Input</Heading>
    <Input label="Lorem ipsum" />
    <Heading size="small">Link</Heading>
    <Link href="">Lorem ipsum</Link>
    <Heading size="small">Offset Media</Heading>
    <OffsetMedia
      image={{ src: "https://picsum.photos/id/82/320/240" }}
      media={{ halo: true }}
    >
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu.
      </Paragraph>
    </OffsetMedia>
    <Heading size="small">Paragraph</Heading>
    <Paragraph size="large">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula
      neque vitae maximus commodo. Maecenas accumsan lectus a dapibus auctor. Ut
      velit ligula, semper in.
    </Paragraph>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula
      neque vitae maximus commodo. Maecenas accumsan lectus a dapibus auctor. Ut
      velit ligula, semper in.
    </Paragraph>
    <Paragraph size="small">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula
      neque vitae maximus commodo. Maecenas accumsan lectus a dapibus auctor. Ut
      velit ligula, semper in.
    </Paragraph>
    <Paragraph size="xsmall">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula
      neque vitae maximus commodo. Maecenas accumsan lectus a dapibus auctor. Ut
      velit ligula, semper in.
    </Paragraph>
  </ContentLayout>
);
