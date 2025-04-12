import React, { useEffect, useState } from "react";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleChangeFromCurrency = (e) => {
    setFromCurrency(e.target.value);
  };
  const handleChangeToCurrency = (e) => {
    setToCurrency(e.target.value);
  };

  useEffect(() => {
    const controller = new AbortController();
    async function convertCurrency() {
      if (!amount) return;

      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`,
          { signal: controller.signal }
        );
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();

        setConvertedAmount(data.rates[toCurrency]);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (fromCurrency === toCurrency) {
      setConvertedAmount(amount);
      return;
    }
    convertCurrency();

    return () => {
      controller.abort();
    };
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={handleChangeAmount}
        placeholder="0"
        disabled={isLoading}
      />
      <select
        value={fromCurrency}
        onChange={handleChangeFromCurrency}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={handleChangeToCurrency}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && amount > 0 && (
        <p>
          {convertedAmount} {toCurrency}
        </p>
      )}
    </div>
  );
}
