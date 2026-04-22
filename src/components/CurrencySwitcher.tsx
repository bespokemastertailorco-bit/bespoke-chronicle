import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useCurrency, CURRENCIES, CurrencyCode } from "@/context/CurrencyContext";

const CurrencySwitcher = () => {
  const { currency, setCurrency } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: CurrencyCode) => {
    setCurrency(code);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2 py-1.5 hover:bg-neutral-100 transition-colors rounded"
        aria-label="Select currency"
      >
        <span className="text-base" role="img" aria-label={currency.name}>
          {currency.flag}
        </span>
        <span className="text-xs font-medium text-neutral-700 hidden sm:inline">
          {currency.code}
        </span>
        <ChevronDown size={12} strokeWidth={1.5} className="text-neutral-500" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white border border-neutral-200 shadow-lg rounded-md py-1 min-w-[140px] z-50 animate-fade-in-down">
          {CURRENCIES.map((curr) => (
            <button
              key={curr.code}
              onClick={() => handleSelect(curr.code)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-neutral-50 transition-colors ${
                currency.code === curr.code ? "bg-neutral-50" : ""
              }`}
            >
              <span className="text-base" role="img" aria-label={curr.name}>
                {curr.flag}
              </span>
              <span className="text-xs text-neutral-700">{curr.code}</span>
              <span className="text-xs text-neutral-400 ml-auto">{curr.symbol}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySwitcher;
