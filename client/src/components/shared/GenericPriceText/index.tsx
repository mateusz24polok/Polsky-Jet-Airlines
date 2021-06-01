import React from "react";
import { useSelector } from "react-redux";
import {
  selectSelectedCurrency,
  selectSelectedCurrencyRateBasedOnPLN,
} from "@store/slices/currencies";
import { Currency, Money } from "@appTypes/shared/money";

interface Props {
  valuePLN: number;
  customStyles?: React.CSSProperties;
}

export const GenericPriceText: React.FC<Props> = ({
  valuePLN,
  customStyles,
}) => {
  const selectedCurrency = useSelector(selectSelectedCurrency);
  const selectedCurrencyRateBasedOnPLN = useSelector(
    selectSelectedCurrencyRateBasedOnPLN,
  );

  const price: Money = {
    value: valuePLN / (selectedCurrencyRateBasedOnPLN || NaN),
    currency: selectedCurrency,
  };

  return (
    <span style={customStyles}>
      {price.value === NaN
        ? "N/A"
        : `${
            price.currency === Currency.PLN
              ? price.value
              : price.value.toFixed(1)
          } ${price.currency}`}
    </span>
  );
};
