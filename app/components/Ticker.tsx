"use client";

import { tickerItems } from "./data";

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {items.map((t, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot" /> {t}
          </span>
        ))}
      </div>
    </div>
  );
}
