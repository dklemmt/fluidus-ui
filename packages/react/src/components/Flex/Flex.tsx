import { clsx } from "clsx";
import { PropsWithChildren } from "react";
import "./Flex.scss";

export interface FlexBaseProps extends PropsWithChildren {
  alignItems?:
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "center"
    | "stretch"
    | "baseline";

  className?: string;
  orientation?: "horizontal" | "vertical";
  /** The gap between elements */
  gap?:
    | "xxxlarge"
    | "xxlarge"
    | "xlarge"
    | "large"
    | "medium"
    | "small"
    | "xsmall"
    | "xxsmall"
    | "xxxsmall"
    | null;
  // justifyContent?: CSSProperties["justifyContent"];
  justifyContent?:
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "stretch"
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "start"
    | "left"
    | "normal"
    | "right";
}

interface FlexNoWrapProps extends FlexBaseProps {
  alignContent?: "normal";
  wrap?: "nowrap";
}

interface FlexWrapProps extends FlexBaseProps {
  alignContent?:
    | "normal"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  wrap?: "wrap" | "wrap-reverse";
}

export type FlexProps = FlexNoWrapProps | FlexWrapProps;

export const Flex = ({
  alignContent = "normal",
  alignItems = "stretch",
  children,
  className = "",
  orientation = "horizontal",
  gap = "medium",
  justifyContent,
  wrap = "nowrap",
  ...rest
}: FlexProps) => (
  <div
    className={clsx(
      `fluidus-flex`,
      {
        [`fluidus-flex-align-${alignContent}`]: alignContent !== "normal",
        [`fluidus-flex-align-items-${alignItems}`]: alignItems !== "stretch",
        [`fluidus-flex-orientation-${orientation}`]:
          orientation !== "horizontal",
        [`fluidus-flex-gap-${gap}`]: !!gap,
        [`fluidus-flex-justify-content-${justifyContent}`]: !!justifyContent,
        [`fluidus-flex-wrap-${wrap}`]: wrap !== "nowrap",
      },
      className,
    )}
    data-testid="flex"
    {...rest}
  >
    {children}
  </div>
);

export default Flex;

Flex.displayName = "Flex";
