import React from "react";

// Amounts array
const amounts = ["$800", "$600", "$400", "$200", "0"];

//Months Array
const months = ["Jan", "Mar", "May", "Jul", "Sep", "Nov"];

export default function PriceChart() {
  return (
    <div
      className="w-full h-[442px] rounded-2xl  pt-[30px] pl-[33px] relative"
      style={{ boxShadow: "0 0 30px rgba(0,0,0,0.08)" }}
    >
      <h1 className="text-[21px]">BTC Prices</h1>

      {/* amounts */}
      <div className="flex">
        <div className="mt-[32px]">
          {amounts.map((amount, idx) => (
            <p className="text-muted-primary mb-[46px] text-xs">{amount}</p>
          ))}
        </div>

        {/* GRAPH VISUALS */}

        <div className="relative overflow-hidden w-[428px] h-[106px] mt-[80px] ml-[16px]">
          {/* svg line */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 300 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#635BFF" stopOpacity="0.2" />
                <stop offset="40%" stopColor="#635BFF" stopOpacity="0.5" />
                <stop offset="70%" stopColor="#635BFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3D38FF" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M0,40
          C 25,53 35,7 60,2
         C 90,3 105,50 125,50
         C 145,50 146,20 185,20
         C 205,20 208,80 235,90
         C 260,95 260,15 265,20
         C 265,10 280,-5 300,1"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
            />
          </svg>

          {/* dot + Price tag */}
          <div className="absolute left-[143px] top-[48px] ">
            <div className="flex flex-col items-center gap-[7px]">
              {/* dot */}
              <div className="rounded-full h-2.5 w-2.5 bg-primary" />
              {/* price tag */}
              <div className="text-center bg-primary rounded-xl py-[6px] px-[13px]">
                <span className="text-sm font-medium text-white">$25,240</span>
              </div>
            </div>
          </div>
        </div>
        {/* bar highlight */}
        <div className="absolute left-[238px] top-[189px] h-[169px] w-[36px] bg-gradient-to-t from-primary/30 to-transparent" />
        {/* bottom line */}
        <div className="bg-black h-2 " />
      </div>
    </div>
  );
}
