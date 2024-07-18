import { clsx } from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";
import "./Code.scss";

export interface CodeProps
  extends HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  className?: string;
}

export const Code = ({ className, ...rest }: CodeProps) => (
  <code
    className={clsx("fluidus-code", className)}
    data-testid="code"
    {...rest}
  />
);

export default Code;

Code.displayName = "Code";
