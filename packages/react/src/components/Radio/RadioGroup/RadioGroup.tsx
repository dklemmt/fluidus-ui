import { clsx } from "clsx";
import {
  Children,
  PropsWithChildren,
  cloneElement,
  isValidElement,
  useState,
} from "react";
import { AssistiveText } from "@components/AssistiveText";
import { ErrorText } from "@components/ErrorText";
import "./RadioGroup.scss";

export interface RadioGroupPropsBase extends PropsWithChildren {
  assistiveText?: string;
  className?: string;
  defaultValue?: string;
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
  name: string;
}

interface RadioGroupPropsError extends RadioGroupPropsBase {
  error: boolean;
  errorText?: string;
}

interface RadioGroupPropsValid extends RadioGroupPropsBase {
  error?: boolean;
  errorText?: never;
}

export type RadioGroupProps = RadioGroupPropsError | RadioGroupPropsValid;

export const RadioGroup = ({
  assistiveText = "",
  children,
  className,
  defaultValue,
  orientation = "vertical",
  disabled = false,
  error,
  errorText = "",
  name,
  ...rest
}: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    defaultValue ?? "",
  );
  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  interface AdditionalProps {
    checked?: boolean;
    disabled?: boolean;
    error?: boolean;
    name?: string;
    onChange?: (value: string) => void;
  }

  const childrenWithProps = Children.map(children, (child) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (isValidElement(child) && child.props.value !== undefined) {
      return cloneElement(child, {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        checked: child.props.value === selectedValue,
        disabled,
        error,
        name,
        onChange: handleChange,
      } as AdditionalProps);
    }
    return child;
  });

  return (
    <div className="fluidus-radio-group-container" role="radiogroup">
      <div
        className={clsx(
          "fluidus-radio-group",
          {
            [`fluidus-radio-group-orientation-${orientation}`]:
              orientation !== "vertical",
          },
          className,
        )}
        {...rest}
      >
        {childrenWithProps}
      </div>
      {assistiveText && <AssistiveText>{assistiveText}</AssistiveText>}
      {error && errorText && errorText?.trim() !== "" && (
        <ErrorText>{errorText}</ErrorText>
      )}
    </div>
  );
};

RadioGroup.displayName = "RadioGroup";
