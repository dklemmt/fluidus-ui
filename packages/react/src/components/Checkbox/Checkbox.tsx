import classNames from "classnames";
import {
  ComponentProps,
  ForwardedRef,
  PropsWithChildren,
  forwardRef,
} from "react";
import "./Checkbox.scss";

export interface CheckboxPropsBase
  extends ComponentProps<"input">,
    PropsWithChildren {
  className?: string;
  disabled?: boolean;
}

interface CheckboxPropsError extends CheckboxPropsBase {
  error: boolean;
  errorText?: string;
}

interface CheckboxPropsValid extends CheckboxPropsBase {
  error?: boolean;
  errorText?: never;
}

export type CheckboxProps = CheckboxPropsError | CheckboxPropsValid;

export const Checkbox = forwardRef(
  (
    {
      children,
      className,
      disabled = false,
      error = false,
      errorText,
      ...rest
    }: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const hasChildren = !!children;
    const InputItem = (
      <input
        className={classNames("fluidus-checkbox", className)}
        disabled={disabled}
        ref={ref}
        type="checkbox"
        {...rest}
      />
    );

    if (hasChildren) {
      return (
        <>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className={classNames("fluidus-checkbox-label")}>
            {InputItem}
            {children}
          </label>
          {error && errorText !== "" && (
            <div aria-invalid="true" className="fluidus-checkbox-error-text">
              {errorText}
            </div>
          )}
        </>
      );
    }

    return InputItem;
  },
);

Checkbox.displayName = "Checkbox";
