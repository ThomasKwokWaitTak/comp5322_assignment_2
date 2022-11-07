import { useState } from "react";
import NumberField from "../components/form/NumberField";
import SelectField from "../components/form/SelectField";
import { ExchangeRateToUsd } from "../constants/Currencies";
import styles from "../styles/Home.module.css";
import EastIcon from "@mui/icons-material/East";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import exchangeCurrency from "../utils/exchangeCurrency";

export default function Home() {
  const [fromAmount, setFromAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<string>("HKD");
  const [toAmount, setToAmount] = useState<number>(0);
  const [toCurrency, setToCurrency] = useState<string>("USD");
  const currencyOptions = Object.keys(ExchangeRateToUsd).map((c) => ({
    label: c,
    value: c,
  }));
  return (
    <>
      <h2 className={styles.title}>Comp5322 Currency Converter</h2>
      <div className={styles.conversion}>
        <div className={styles.currency}>
          <SelectField
            value={fromCurrency}
            handleChange={setFromCurrency}
            options={currencyOptions}
            helpText="Select your currency to convert"
          />
          <div className={styles.amount}>
            <NumberField num={fromAmount} onChange={setFromAmount} helperText="Amount to convert" />
          </div>
        </div>
        <div className={styles.arrow}>
          <EastIcon color="primary" />
        </div>
        <div className={styles.currency}>
          <SelectField
            value={toCurrency}
            handleChange={setToCurrency}
            options={currencyOptions}
            helpText="The traget currency"
          />
          <div className={styles.amount}>
            <NumberField num={toAmount} helperText="Amount after conversion" />
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <Button
          variant="outlined"
          endIcon={<SendIcon />}
          onClick={() => {
            setToAmount(exchangeCurrency(fromCurrency, fromAmount, toCurrency));
          }}
        >
          Convert
        </Button>
      </div>
    </>
  );
}
