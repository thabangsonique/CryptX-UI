import React from "react";

export default function StatsCard({ image, value, rate, label, className }) {
  return (
    <div
      className="lg:w-[232px] lg:h-[185px] rounded-2xl pl-[30px] pt-[32px]"
      style={{ boxShadow: "0 0 30px rgba(0,0,0, 0.08)" }}
    >
      {/* IMAGE + RATE */}
      <div className="flex">
        {/* image */}
        <div className="bg-amber-400 w-[52px] h-[52px] rounded-xl flex items-center justify-center">
          {" "}
          {image}
        </div>

        {/* rate */}
        <div className="flex items-center gap-[10px] ml-[61px]">
          {image}
          <p className="text-price-up">{rate}</p>
        </div>
      </div>

      {/* PRICE TEXT LABEL */}
      <div className="mt-[24px] gap-[5px]">
        <span className="text-[28px] font-semibold">{value}</span>
        <p className="text-sm font-normal text-muted-primary">{label}</p>
      </div>
    </div>
  );
}
