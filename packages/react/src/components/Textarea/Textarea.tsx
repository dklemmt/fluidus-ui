import { clsx } from "clsx";
import { ComponentProps, useId } from "react";
import "./Textarea.scss";

export interface TextareaPropsBase extends ComponentProps<"textarea"> {
  assistiveText?: string;
  disabled?: boolean;
  label: string;
  maxLength?: number;
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
  maxLength = 500,
  value,
  ...rest
}: TextareaProps) => {
  const textareaId = `textarea-${useId()}`;

  return (
    <div className="fluidus-textarea-container">
      {label && (
        <label
          className={clsx("fluidus-textarea-label")}
          data-content={label}
          htmlFor={textareaId}
        >
          <span className="hidden--visually">{label}</span>
        </label>
      )}
      <textarea
        className={clsx(
          "fluidus-textarea",
          { "fluidus-textarea--error": error },
          className,
        )}
        disabled={disabled}
        id={textareaId}
        maxLength={maxLength}
        placeholder={label}
        value={value}
        {...rest}
      />
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

Textarea.displayName = "Textarea";
