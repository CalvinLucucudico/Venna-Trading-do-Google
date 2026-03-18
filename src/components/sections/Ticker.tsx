import React from 'react';

export const Ticker = () => {
  const items = ['Product Sourcing', 'Supplier Verification', 'Procurement Support', 'Trade Facilitation', 'Negotiation', 'Shenzhen HQ'];
  
  return (
    <div className="py-6 border-y border-white/5 bg-white/[0.02] overflow-hidden whitespace-nowrap flex">
      <div className="flex animate-ticker items-center">
        {[...Array(3)].map((_, i) => (
          <React.Fragment key={i}>
            {items.map((item) => (
              <div key={item} className="flex items-center gap-6 px-6">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                <span className="text-muted-foreground font-mono text-xs uppercase tracking-widest">{item}</span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
