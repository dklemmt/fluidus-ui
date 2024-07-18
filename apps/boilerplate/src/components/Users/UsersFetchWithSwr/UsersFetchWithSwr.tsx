import useSWR from "swr";
import { Heading, Spinner } from "@fluidus-ui/react";
import { Users } from "@components/Users";

export const UsersFetchWithSwr = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  // const url = "https://fakestoreapi.com/products";
  const url = "/mock/users.json";
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) {
    return <p>Error loading data</p>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Heading size="large">User list (fetched using SWR)</Heading>
      <Users users={data} />
    </>
  );
};

export default UsersFetchWithSwr;
