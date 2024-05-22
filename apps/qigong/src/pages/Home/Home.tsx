// import { lazy } from "react";
import {
  // Divider,
  Heading,
  Paragraph,
} from "@fluidus-ui/react";
import { RegistrationForm } from "@components/RegistrationForm";
import { PageContainer } from "../PageContainer";
// import { Sun } from "lucide-react";

// const ContentHeader = lazy(() => import("@components/ContentHeader") as never);

export const Home = () => (
  <PageContainer>
    <Heading>Qigong mit Nina</Heading>
    <Paragraph>
      Entdecke die transformative Kraft von Qigong, einer jahrhundertealten
      chinesischen Praxis, die Körper, Geist und Seele in Einklang bringt. In
      meinem Kurs tauchst Du ein in die reiche Welt des Qigong, indem Du
      traditionelle Bewegungen, Atemtechniken und Meditationen erlernst, die
      darauf abzielen, deine Lebensenergie zu stärken und Dein Wohlbefinden zu
      verbessern.
    </Paragraph>
    <Paragraph>
      Dieser Kurs ist für Teilnehmer aller Altersgruppen und Fitnessniveaus
      geeignet, von Anfängern bis zu Fortgeschrittenen. Er findet <b>einmal</b>{" "}
      wöchentlich <b>online</b> statt.
    </Paragraph>
    <Paragraph>
      Mein Kurs ist als <b>Präventionskurs</b> nach <b>§ 20 SGB V</b> über die
      Zentrale Prüfstelle Prävention zertifiziert. Bei einer Teilnahme von
      mindestens 80% der Termine erhälst Du eine Teilnahmebescheinigung, die Du
      bei Deiner Krankenkasse einreichen kannst. Je nach Krankenkasse kannst Du
      eine teilweise oder vollständige Erstattung der Kursgebühr erhalten. Die
      Höhe und Häufigkeit der Erstattung variieren je nach Krankenkasse. Bei
      Fragen wende Dich bitte direkt an Deine Krankenkasse.
    </Paragraph>
    {/* <Divider> */}
    {/*  <Sun size={24} /> */}
    {/* </Divider> */}
    <Heading size="medium">Der Kurs</Heading>
    <Heading size="small">Inhalt - Die 18 Übungen des Taiji Qigong</Heading>
    <Paragraph>
      Die 18 Übungen des Taiji Qigong (auch Shibashi (Set 1) manchmal auch als
      18 HarmonieÜbungen bezeichnet) sind eine moderne Übungsreihe. Sie von
      Prof. Lin Housheng und He Wei Qi an der Universität für TCM in Shanghai im
      Jahre 1982 zusammengestellt. Diese Variante ist am stärksten von Frau Wang
      Qin beeinflusst, die Schülerin von Lin Housheng war. Die Übungsreihe ist
      in ihrer Wirkungsweise gut belegt und jeder kann sie leicht erlernen. Auch
      werden unterschiedliche Bilder verwendet, um eine freundliche Stimmung zu
      erzeugen. Bei den Übungen richtet man seine eigene gebündelte
      Aufmerksamkeit auf den jeweilige Übungsablauf. Dadurch entspannen sich
      Körper und Geist. Wie von allein reguliert sich der Atem, wird langsamer
      und tiefer. Dadurch werden der Stoffwechsel und körperliche Verfassung
      gestärkt.
    </Paragraph>
    <Heading size="small">Inhalt - Die 18 Übungen des Taiji Qigong</Heading>
    <RegistrationForm />
  </PageContainer>
);

export default Home;
