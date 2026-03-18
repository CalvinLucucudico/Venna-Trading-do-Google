import React, { useState, useEffect } from 'react';

export const CurrencyConverter = () => {
  const [rates, setRates] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const currencies = ['USD', 'CNY', 'EUR', 'AOA', 'ZAR', 'BRL'];

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch('https://open.er-api.com/v6/latest/USD');
        const data = await res.json();
        setRates(data.rates);
      } catch (err) {
        console.error('Failed to fetch rates', err);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  if (loading) return <div className="animate-pulse h-20 bg-white/5 rounded-2xl" />;

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-primary">Live Exchange Rates</h4>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] text-muted-foreground uppercase font-mono">Real-time</span>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {currencies.map(curr => (
          <div key={curr} className="flex flex-col">
            <span className="text-[10px] text-muted-foreground font-mono uppercase mb-1">{curr} / USD</span>
            <span className="text-lg font-semibold text-foreground">
              {rates ? rates[curr].toFixed(2) : '---'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
