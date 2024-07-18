import { useLoaderData } from "react-router-dom";
import { ContentLayout, Heading } from "@fluidus-ui/react";
import { Users } from "@components/Users";

export const Component = () => {
  const data = useLoaderData() as never;

  return (
    <ContentLayout>
      <Heading size="large">User list (fetched using React Router)</Heading>
      <Users users={data} />
    </ContentLayout>
  );
};
