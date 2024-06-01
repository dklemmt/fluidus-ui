import { clsx } from "clsx";
import { ComponentProps, PropsWithChildren } from "react";
import "./BlockQuote.scss";

export interface BlockQuoteProps
  extends ComponentProps<"div">,
    PropsWithChildren {
  className?: string;
  source?: string;
}

export const BlockQuote = ({
  children,
  className,
  source,
}: BlockQuoteProps) => (
  <div className={clsx("fluidus-block-quote", className)}>
    <div className="fluidus-block-quote--quote">{children}</div>
    {source && <div className="fluidus-block-quote--source">{source}</div>}
  </div>
);

BlockQuote.displayName = "BlockQuote";
