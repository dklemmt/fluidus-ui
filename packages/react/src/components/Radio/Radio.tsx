import { clsx } from "clsx";
import { ComponentProps, PropsWithChildren } from "react";
import { AssistiveText } from "@components/AssistiveText";
import { ErrorText } from "@components/ErrorText";
import "./Radio.scss";

export interface RadioPropsBase
  extends Omit<ComponentProps<"input">, "onChange">,
    PropsWithChildren {
  assistiveText?: string;
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  name?: string;
  onChange?: (value: string | undefined) => void;
  value: string;
}

interface RadioPropsError extends RadioPropsBase {
  error: boolean;
  errorText?: string;
}

interface RadioPropsValid extends RadioPropsBase {
  error?: boolean;
  errorText?: never;
}

export type RadioProps = RadioPropsError | RadioPropsValid;

export const Radio = ({
  assistiveText = "",
  checked,
  children,
  className = "",
  disabled = false,
  error,
  errorText,
  name,
  onChange = () => {},
  value,
  ...rest
}: RadioProps) => {
  const hasChildren = !!children;
  const InputItem = (
    <input
      aria-checked={checked}
      checked={checked}
      className={clsx(
        "fluidus-radio",
        { "fluidus-radio--error": error },
        className,
      )}
      disabled={disabled}
      name={name}
      onChange={(event) => onChange(event.target.value)}
      type="radio"
      value={value}
      {...rest}
    />
  );

  if (hasChildren) {
    return (
      <div className="fluidus-radio-container">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className={clsx("fluidus-radio-label")}>
          {InputItem}
          {children}
          {assistiveText && <AssistiveText>{assistiveText}</AssistiveText>}
          {error && errorText && errorText?.trim() !== "" && (
            <ErrorText>{errorText}</ErrorText>
          )}
        </label>
      </div>
    );
  }

  return InputItem;
};

Radio.displayName = "Radio";
