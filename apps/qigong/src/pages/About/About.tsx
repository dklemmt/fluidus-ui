import {
  ContentSection,
  Heading,
  OffsetMedia,
  Paragraph,
} from "@fluidus-ui/react";
import { PageContainer } from "../PageContainer";

export const About = () => (
  <PageContainer>
    <ContentSection size="narrow">
      <Heading>Über mich</Heading>
      <OffsetMedia
        image={{ src: "https://picsum.photos/320/200" }}
        media={{ halo: true, size: "large" }}
      >
        <Paragraph>
          Mein Name ist Nina Haas, und ich bin leidenschaftliche Qigong-Lehrerin
          mit langjähriger Erfahrung in der Praxis und Unterrichtung dieser
          faszinierenden chinesischen Heilkunst. Seit [Jahren/Monaten] leite ich
          Kurse und Workshops, in denen ich mein Wissen und meine Begeisterung
          für Qigong mit meinen Schülern teile.
        </Paragraph>
        <Paragraph>
          Mein eigener Weg mit Qigong begann vor vielen Jahren, als ich nach
          Methoden suchte, um mein eigenes Wohlbefinden zu verbessern und innere
          Ruhe zu finden. Fasziniert von der ganzheitlichen Philosophie und den
          positiven Auswirkungen von Qigong auf Körper, Geist und Seele, habe
          ich mich intensiv mit dieser Praxis auseinandergesetzt und
          verschiedene Qigong-Stile und -Techniken studiert.
        </Paragraph>
      </OffsetMedia>
    </ContentSection>
    <ContentSection size="narrow">
      <OffsetMedia
        image={{ src: "https://picsum.photos/320/200" }}
        media={{ halo: true, position: "right", size: "large" }}
      >
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
        </Paragraph>
      </OffsetMedia>
    </ContentSection>
  </PageContainer>
);

export default About;
