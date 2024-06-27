import { clsx } from "clsx";
import {
  ComponentProps,
  ForwardedRef,
  PropsWithChildren,
  forwardRef,
} from "react";
import { AssistiveText } from "@components/AssistiveText";
import { ErrorText } from "@components/ErrorText";
import "./Checkbox.scss";

export interface CheckboxPropsBase
  extends ComponentProps<"input">,
    PropsWithChildren {
  assistiveText?: string;
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
      assistiveText = "",
      children,
      className = "",
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
        className={clsx(
          "fluidus-checkbox",
          { "fluidus-checkbox--error": error },
          className,
        )}
        data-testid="checkbox-input"
        disabled={disabled}
        ref={ref}
        type="checkbox"
        {...rest}
      />
    );

    if (hasChildren) {
      return (
        <div className="fluidus-checkbox-container">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label
            className={clsx("fluidus-checkbox-label")}
            data-testid="checkbox-label"
          >
            {InputItem}
            {children}
            {assistiveText && (
              <AssistiveText data-testid="checkbox-assistive-text">
                {assistiveText}
              </AssistiveText>
            )}
            {error && errorText && errorText?.trim() !== "" && (
              <ErrorText data-testid="checkbox-error-text">
                {errorText}
              </ErrorText>
            )}
          </label>
        </div>
      );
    }

    return InputItem;
  },
);

Checkbox.displayName = "Checkbox";
