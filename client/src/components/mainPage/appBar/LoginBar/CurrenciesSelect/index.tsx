import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem, Select } from "@material-ui/core";
import {
  selectCurrency,
  selectSelectedCurrency,
} from "@store/slices/currencies";
import { Currency, appCurrencies } from "@appTypes/shared/money";
import { OptionFormItem } from "@appTypes/shared/form";
import { useStyles } from "./styles";

export const CurrenciesSelect: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const selectedCurrency = useSelector(selectSelectedCurrency);

  const appCurrenciesFormOptions: OptionFormItem<Currency>[] = appCurrencies.map(
    currency => ({
      label: currency,
      value: currency,
    }),
  );

  const onSelectChangeHandle = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>,
  ) => {
    dispatch(selectCurrency(event.target.value as Currency));
  };

  return (
    <Select
      MenuProps={{ disableScrollLock: true }}
      onChange={onSelectChangeHandle}
      className={classes.select}
      value={selectedCurrency}
    >
      {appCurrenciesFormOptions.map(currency => (
        <MenuItem key={currency.label} value={currency.value}>
          {currency.label}
        </MenuItem>
      ))}
    </Select>
  );
};
