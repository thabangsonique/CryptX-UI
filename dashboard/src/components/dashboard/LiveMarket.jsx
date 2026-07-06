import React from "react";

const markets = [
  {
    icon: "./assets/live-icons/ethereum-(eth) (1).svg",
    title: "Ethereum",
    exchange: "ETH / USDT",
    rate: "+14.02%",
    value: "39,786 USD",
    image: "./assets/graphs.svg",
  },
  {
    icon: "./assets/live-icons/bitcoin-(btc) (1).svg",
    title: "Bitcoin",
    exchange: "ETH / USDT",
    rate: "+4.02%",
    value: "21,786 USD",
    image: "./assets/graphs.svg",
  },
  {
    icon: "./assets/live-icons/litecoin(ltc) (1).svg",
    title: "Litecoin",
    exchange: "ITC / USDT",
    rate: "-4.02%",
    value: "9,786 USD",
    image: "./assets/graphs.svg",
  },
  {
    icon: "./assets/live-icons/cardano-(ada) (1).svg",
    title: "Cardano",
    exchange: "ADA / USDT",
    rate: "+0.02%",
    value: "4,786 USD",
    image: "./assets/graphs.svg",
  },
];

export default function LiveMarket() {
  return (
    <div className=" bg-white xl:w-[692px] xl:h-[358px]">
      <span className="text-black text-[21px] font-semibold">Live Market</span>

      {/* live market rows */}
      <div className="space-y-[32px] mt-[26px] ">
        {markets.map((marketItem, idx) => (
          <div key={idx} className="flex items-center justify-between">
            {/* icon */}
            <div className="rounded-full border-border border-[2px] p-[13px] flex ">
              <img src={marketItem.icon} />
            </div>

            {/* title text */}
            <div className="ml-[15px] space-x-[5px]">
              <span className="font-semibold text-base">
                {marketItem.title}
              </span>
              <p className="font-regular text-sm text-muted-foreground">
                {marketItem.exchange}
              </p>
            </div>

            {/* exchange rate */}
            <div>
              <p className="font-regular text-xs text-muted-foreground">
                Change
              </p>
              <span className="text-rate-up font-medium">
                {marketItem.rate}
              </span>
            </div>

            {/* price */}
            <div>
              <p className="text-muted-foreground text-xs font-regular">
                Price
              </p>
              <span className="font-semibold text-sm">39,786 USD</span>
            </div>

            {/* graph */}
            <div className="hidden md:block">
              <img src={marketItem.image} alt="Market Graph" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
