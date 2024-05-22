import classNames from "classnames";
import { ComponentProps, useId } from "react";
import "./Textarea.scss";

export interface TextareaPropsBase extends ComponentProps<"textarea"> {
  assistiveText?: string;
  disabled?: boolean;
  label: string;
  value?: string;
}

interface TextareaPropsError extends TextareaPropsBase {
  error: boolean;
  errorText?: string;
}

interface TextareaPropsValid extends TextareaPropsBase {
  error?: boolean;
  errorText?: never;
}

export type TextareaProps = TextareaPropsError | TextareaPropsValid;

export const Textarea = ({
  assistiveText,
  className = "",
  disabled = false,
  error = false,
  errorText,
  label,
  value,
  ...rest
}: TextareaProps) => {
  const inputId = `input-${useId()}`;

  return (
    <div className="fluidus-textarea-container">
      <textarea
        className={classNames(
          "fluidus-textarea",
          {
            "fluidus-textarea--disabled": disabled,
            "fluidus-textarea--error": error,
          },
          className,
        )}
        disabled={disabled}
        id={inputId}
        placeholder={label}
        // ref={ref}
        // type={type}
        value={value}
        {...rest}
      />
      {label && (
        <label
          className={classNames("fluidus-textarea-label", {
            "fluidus-textarea-label--disabled": disabled,
          })}
          data-content={label}
          htmlFor={inputId}
        >
          <span className="hidden--visually">{label}</span>
        </label>
      )}
      {error && errorText !== "" && (
        <div aria-invalid="true" className="fluidus-textarea-error-text">
          {errorText}
        </div>
      )}
      {assistiveText && (
        <div className="fluidus-textarea-assistive-text">{assistiveText}</div>
      )}
    </div>
  );
};

// Textarea.displayName = "Input";
