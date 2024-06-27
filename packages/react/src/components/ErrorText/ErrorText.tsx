import { clsx } from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";
import "./ErrorText.scss";

export interface ErrorTextProps
  extends HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  className?: string;
}

export const ErrorText = ({ className, ...rest }: ErrorTextProps) => (
  <small
    aria-invalid="true"
    className={clsx("fluidus-error-text", className)}
    data-testid="error-text"
    {...rest}
  />
);

ErrorText.displayName = "ErrorText";
