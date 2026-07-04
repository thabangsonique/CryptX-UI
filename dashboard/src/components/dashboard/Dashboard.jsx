import React from "react";

import StatsCard from "./StatsCard";

export default function Dashboard() {
  return (
    <div>
      <StatsCard
        image={<img src="/assets/bitcoin-(btc).svg" />}
        value="$40,291"
        rate="+0.25%"
        label="Bitcoin - BTC"
      />
      <StatsCard
        image={<img src="/assets/bitcoin-(btc).svg" />}
        value="$40,291"
        rate="+0.25%"
        label="Bitcoin - BTC"
      />
      <StatsCard
        image={<img src="/assets/bitcoin-(btc).svg" />}
        value="$40,291"
        rate="+0.25%"
        label="Bitcoin - BTC"
      />
      <StatsCard
        image={<img src="/assets/bitcoin-(btc).svg" />}
        value="$40,291"
        rate="+0.25%"
        label="Bitcoin - BTC"
      />
    </div>
  );
}
