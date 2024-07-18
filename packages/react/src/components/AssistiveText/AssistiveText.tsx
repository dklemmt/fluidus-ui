import { clsx } from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";
import "./AssistiveText.scss";

export interface AssistiveTextProps
  extends HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  className?: string;
}

export const AssistiveText = ({ className, ...rest }: AssistiveTextProps) => (
  <small
    className={clsx("fluidus-assistive-text", className)}
    data-testid="assistive-text"
    {...rest}
  />
);

export default AssistiveText;

AssistiveText.displayName = "AssistiveText";
