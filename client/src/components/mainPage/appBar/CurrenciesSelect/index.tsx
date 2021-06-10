import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, MenuItem, Select } from "@material-ui/core";
import {
  fetchCurrencies,
  selectCurrency,
  selectIsProgress,
  selectSelectedCurrency,
} from "@store/slices/currencies";
import { Currency, appCurrencies } from "@appTypes/shared/money";
import { OptionFormItem } from "@appTypes/shared/form";
import { useStyles } from "./styles";

export const CurrenciesSelect: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isCurrenciesStateProgress = useSelector(selectIsProgress);
  const selectedCurrency = useSelector(selectSelectedCurrency);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

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
    <>
      {isCurrenciesStateProgress ? (
        <CircularProgress className={classes.circularProgress} size={24} />
      ) : (
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
      )}
    </>
  );
};
