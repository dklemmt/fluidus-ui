import { clsx } from "clsx";
import { BlockquoteHTMLAttributes, PropsWithChildren } from "react";
import "./BlockQuote.scss";

export interface BlockQuoteProps
  extends BlockquoteHTMLAttributes<HTMLQuoteElement>,
    PropsWithChildren {
  className?: string;
  source?: string;
}

export const BlockQuote = ({
  children,
  className = "",
  source = "",
  ...rest
}: BlockQuoteProps) => (
  <blockquote
    className={clsx("fluidus-block-quote", className)}
    data-testid="block-quote"
    {...rest}
  >
    <div className="fluidus-block-quote--quote" data-testid="block-quote-quote">
      {children}
    </div>
    {source && (
      <cite
        className="fluidus-block-quote--source"
        data-testid="block-quote-source"
      >
        {source}
      </cite>
    )}
  </blockquote>
);

export default BlockQuote;

BlockQuote.displayName = "BlockQuote";
