import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img 
      src="https://res.cloudinary.com/dwwgnumbe/image/upload/f_auto,q_auto/v1773661697/logo-horizontal-light_dw9oqm.svg" 
      alt="Vena Trading Logo" 
      className="h-6 w-auto"
      referrerPolicy="no-referrer"
    />
  </div>
);
