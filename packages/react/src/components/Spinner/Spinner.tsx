import { clsx } from "clsx";
import { useId } from "react";
import "./Spinner.scss";

export interface SpinnerProps {
  /** A string representing the ARIA label for the spinner. */
  ariaLabel?: string;
  /** Additional CSS classes to be applied to the spinner component. */
  className?: string;
  /** A string representing the label to be displayed alongside the spinner. */
  label?: string;
  /** A string representing the size of the spinner. */
  size?: "medium" | "small";
}

export const Spinner = ({
  ariaLabel = "Loading",
  className = "",
  label = "",
  size = "medium",
  ...rest
}: SpinnerProps) => {
  const hasLabel = !!label;
  const ariaUid = `spinner-${useId()}`;
  const ariaLabelValue = hasLabel ? undefined : ariaLabel;
  const ariaLabelledByValue = hasLabel ? ariaUid : undefined;

  const SpinnerItem = (
    <div
      aria-busy="true"
      aria-live="polite"
      aria-label={ariaLabelValue}
      aria-labelledby={ariaLabelledByValue}
      className={clsx(`fluidus-spinner fluidus-spinner--${size}`, className)}
      role="progressbar"
      data-testid="spinner-spinner"
      {...rest}
    />
  );

  if (hasLabel) {
    return (
      <div className="fluidus-spinner-container">
        {SpinnerItem}
        <div id={ariaUid} data-testid="spinner-label">
          {label}
        </div>
      </div>
    );
  }

  return SpinnerItem;
};

Spinner.displayName = "Spinner";
