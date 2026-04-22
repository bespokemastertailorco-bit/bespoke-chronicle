import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export type CurrencyCode = "INR" | "GBP" | "USD" | "EUR" | "AED";

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  flag: string;
  name: string;
}

export const CURRENCIES: Currency[] = [
  { code: "INR", symbol: "₹", flag: "🇮🇳", name: "Indian Rupee" },
  { code: "GBP", symbol: "£", flag: "🇬🇧", name: "British Pound" },
  { code: "USD", symbol: "$", flag: "🇺🇸", name: "US Dollar" },
  { code: "EUR", symbol: "€", flag: "🇪🇺", name: "Euro" },
  { code: "AED", symbol: "د.إ", flag: "🇦🇪", name: "UAE Dirham" },
];

// Exchange rates (INR to other currencies)
// These are static rates as specified in requirements
const EXCHANGE_RATES: Record<CurrencyCode, number> = {
  INR: 1,
  GBP: 1 / 107,  // INR to GBP: divide by 107
  USD: 1 / 84,   // INR to USD: divide by 84
  EUR: 1 / 90,   // INR to EUR: divide by 90
  AED: 1 / 23,   // INR to AED: divide by 23
};

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: CurrencyCode) => void;
  formatPrice: (priceInInr: number) => string;
  convertPrice: (priceInInr: number) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const STORAGE_KEY = "bespoke_currency";

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<Currency>(CURRENCIES[0]); // Default to INR

  // Load saved currency from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const found = CURRENCIES.find(c => c.code === saved);
      if (found) {
        setCurrencyState(found);
      }
    }
  }, []);

  // Save to localStorage whenever currency changes
  const setCurrency = useCallback((code: CurrencyCode) => {
    const found = CURRENCIES.find(c => c.code === code);
    if (found) {
      setCurrencyState(found);
      localStorage.setItem(STORAGE_KEY, code);
    }
  }, []);

  // Convert price from INR to selected currency
  const convertPrice = useCallback((priceInInr: number): number => {
    const rate = EXCHANGE_RATES[currency.code];
    const converted = priceInInr * rate;
    return Math.round(converted);
  }, [currency]);

  // Format price with currency symbol
  const formatPrice = useCallback((priceInInr: number): string => {
    const converted = convertPrice(priceInInr);
    
    // For AED, put symbol after the number
    if (currency.code === "AED") {
      return `${converted} ${currency.symbol}`;
    }
    
    return `${currency.symbol}${converted.toLocaleString()}`;
  }, [currency, convertPrice]);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};

export default CurrencyContext;
