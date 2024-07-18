import { lazy } from "react";
import { ContentLayout, Heading, Paragraph } from "@fluidus-ui/react";

const UsersFetchWithSwr = lazy(
  () => import("@components/Users/UsersFetchWithSwr") as never,
);

export const Component = () => (
  <ContentLayout>
    <Heading>Fluidus UI React Boilerplate</Heading>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
      enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
      felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
      elementum semper nisi.
    </Paragraph>
    <UsersFetchWithSwr />
  </ContentLayout>
);
