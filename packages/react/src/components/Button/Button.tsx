import { clsx } from "clsx";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from "react";
import { Link } from "@components/Link";
import "./Button.scss";

export interface ButtonPropsBase
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  className?: string;
  disabled?: boolean;
}

interface ButtonButtonProps extends ButtonPropsBase {
  href?: never;
  type: "button" | "submit";
}

interface ButtonLinkProps extends ButtonPropsBase {
  href?: string;
  type?: never;
}

export type ButtonProps = ButtonButtonProps | ButtonLinkProps;

export const Button = ({
  children,
  className,
  disabled,
  href,
  type = "button",
  ...rest
}: ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  if (href) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={clsx("fluidus-button", className)}
      disabled={disabled}
      type={type === "button" ? "button" : "submit"}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

Button.displayName = "Button";
