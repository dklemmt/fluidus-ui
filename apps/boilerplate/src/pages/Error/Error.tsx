import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Heading, Paragraph } from "@fluidus-ui/react";

export const ErrorPage = () => {
  const errorMessage = (error: unknown): string => {
    if (isRouteErrorResponse(error)) {
      return (error.data.message ?? error.statusText) as string;
    }
    if (error instanceof Error) {
      return error.message;
    }
    if (typeof error === "string") {
      return error;
    }

    return "Unknown error";
  };

  const error = useRouteError();

  return (
    <>
      <Heading size="small">Oops!</Heading>
      <Paragraph>Sorry, an unexpected error has occurred.</Paragraph>
      <Paragraph>
        <i>{errorMessage(error)}</i>
      </Paragraph>
    </>
  );
};

export default Error;
