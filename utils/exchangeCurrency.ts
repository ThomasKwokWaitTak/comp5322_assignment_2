import { ExchangeRateToUsd } from "../constants/Currencies";

const exchangeCurrency = (fromCurrency: string, amount: number, toCurrency: string, exchangeRate: any = ExchangeRateToUsd): number => {
    const fromExchangeRate = exchangeRate[fromCurrency];
    const toExchageRate = exchangeRate[toCurrency];

    return (amount*(fromExchangeRate/toExchageRate));
}

export default exchangeCurrency;