import React from "react";

import StatsCard from "./StatsCard";
import PriceChart from "./PriceChart";

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 items-start overflow-y-auto min-h-screen pl-[39px] pt-[149px] pr-[43px]">
        {/* left grid stats */}
        <div className="grid md:grid-cols-2 gap-[30px]">
          <StatsCard
            image={<img src="/assets/bitcoin-(btc).svg" alt="Bitcoin" />}
            rateImage={<img src="./assets/arrow-up.svg" />}
            value="$40,291"
            rate="+0.25%"
            rateColor="text-rate-up"
            label="Bitcoin - BTC"
            iconBg="bg-[#fabc1e]"
          />
          <StatsCard
            image={<img src="/assets/ethereum-(eth).svg" alt="Bitcoin" />}
            rateImage={<img src="./assets/arrow-up.svg" />}
            value="$40,291"
            rateColor="text-rate-up"
            rate="+0.25%"
            label="Bitcoin - BTC"
            iconBg="bg-[#6154f0]"
          />
          <StatsCard
            image={<img src="/assets/litecoin(ltc).svg" alt="Ethereum" />}
            rateImage={<img src="./assets/arrow-up.svg" />}
            value="$40,291"
            rateColor="text-rate-up"
            rate="+0.25%"
            label="Bitcoin - BTC"
            iconBg="bg-[#3855ec]"
          />
          <StatsCard
            image={<img src="/assets/cardano-(ada).svg" />}
            rateImage={<img src="./assets/arrow-down-2.svg" />}
            value="$40,291"
            rateColor="text-rate-down"
            rate="+0.25%"
            label="Bitcoin - BTC"
            iconBg="bg-[#1ecb4f]"
          />
        </div>

        {/* right-side */}
        <div className="xl:ml-[27px] lg:mt-[30px] xl:mt-0">
          <PriceChart />
        </div>
      </div>

      {/* live markets + transections */}
    </>
  );
}
