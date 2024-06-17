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
  direction?: "horizontal" | "vertical";
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
  direction = "horizontal",
  gap = "medium",
  justifyContent = "normal",
  wrap = "nowrap",
  ...rest
}: FlexProps) => (
  <div
    className={clsx(
      `fluidus-flex`,
      {
        [`fluidus-flex-align-${alignContent}`]: alignContent !== "normal",
        [`fluidus-flex-align-items-${alignItems}`]: alignItems !== "stretch",
        [`fluidus-flex-direction-${direction}`]: direction !== "horizontal",
        [`fluidus-flex-gap-${gap}`]: !!gap,
        [`fluidus-flex-justify-content-${justifyContent}`]:
          justifyContent !== "normal",
        [`fluidus-flex-wrap-${wrap}`]: wrap !== "nowrap",
      },
      className,
    )}
    {...rest}
  >
    {children}
  </div>
);

Flex.displayName = "Flex";
