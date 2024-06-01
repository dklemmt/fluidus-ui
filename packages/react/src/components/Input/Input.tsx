import { clsx } from "clsx";
import { ComponentProps, ForwardedRef, forwardRef, useId } from "react";
import "./Input.scss";

interface InputPropsBase extends ComponentProps<"input"> {
  assistiveText?: string;
  className?: string;
  disabled?: boolean;
  label: string;
  type?: "password" | "text";
  value?: string;
}

interface InputPropsError extends InputPropsBase {
  error: boolean;
  errorText?: string;
}

interface InputPropsValid extends InputPropsBase {
  error?: boolean;
  errorText?: never;
}

export type InputProps = InputPropsError | InputPropsValid;

export const Input = forwardRef(
  (
    {
      assistiveText,
      className = "",
      disabled = false,
      error = false,
      errorText,
      label,
      type = "text",
      value,
      ...rest
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const inputId = `input-${useId()}`;

    return (
      <div className="fluidus-input-container">
        <input
          className={clsx(
            "fluidus-input",
            { "fluidus-input--error": error },
            className,
          )}
          disabled={disabled}
          id={inputId}
          placeholder={label}
          ref={ref}
          type={type}
          value={value}
          {...rest}
        />
        {label && (
          <label
            className={clsx("fluidus-input-label")}
            data-content={label}
            htmlFor={inputId}
          >
            <span className="hidden--visually">{label}</span>
          </label>
        )}
        {assistiveText && (
          <div className="fluidus-input-assistive-text">{assistiveText}</div>
        )}
        {error && errorText !== "" && (
          <div aria-invalid="true" className="fluidus-input-error-text">
            {errorText}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
