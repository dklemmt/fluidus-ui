import { clsx } from "clsx";
import { ComponentProps, PropsWithChildren } from "react";
import "./Link.scss";

export interface LinkProps extends ComponentProps<"a">, PropsWithChildren {
  className?: string;
  href: string;
}

export const Link = ({ children, className, href, ...rest }: LinkProps) => (
  <a className={clsx("fluidus-link", className)} href={href} {...rest}>
    {children}
  </a>
);

Link.displayName = "Link";
