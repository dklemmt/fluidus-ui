interface FormatCurrencyProps {
  currency?: string;
  intl?: {
    locale?: string;
    currencyDisplay?: "symbol" | "narrowSymbol" | "code" | "name";
  };
  precision?: number;
  showPositivePrefix?: boolean;
  showTrend?: boolean;
  value: number | string;
}

/**
 * Type guard to check if a value is a valid number or a string that can be converted to a number.
 * @param value - The value to check.
 * @returns {boolean} - True if the value is a valid number or a string that can be converted to a number.
 */
const isNumber = (value: number | string): value is number | string =>
  (typeof value === "number" && !Number.isFinite(value)) ||
  (typeof value === "string" &&
    value !== "" &&
    !Number.isFinite(Number(value)));

/**
 * Function will format a number as currency
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
 *
 * @param {FormatCurrencyProps} props - formatting options
 * @returns {string | undefined} - formatted currency value
 */
export const formatCurrency = ({
  currency = "EUR",
  intl = {},
  precision = 2,
  showPositivePrefix = false,
  showTrend = false,
  value,
}: FormatCurrencyProps): string | undefined => {
  if (!isNumber(value)) {
    return undefined;
  }

  const { locale = "de-DE", currencyDisplay = "symbol" } = intl;
  const currencyValue = Number(value);

  let formattedValue = `${showPositivePrefix && currencyValue > 0 ? "+" : ""}${new Intl.NumberFormat(
    locale,
    {
      style: "currency",
      currency,
      currencyDisplay,
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    },
  ).format(currencyValue)}`;

  if (showTrend && currencyValue !== 0) {
    const trendClass = currencyValue > 0 ? "val-positive" : "val-negative";
    formattedValue = `<span class="${trendClass}">${formattedValue}</span>`;
  }

  return formattedValue;
};
