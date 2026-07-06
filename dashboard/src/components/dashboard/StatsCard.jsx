import React from "react";

export default function StatsCard({
  rateImage,
  image,
  value,
  rate,
  label,
  iconBg,
  rateColor,
}) {
  return (
    <div
      className="w-full rounded-2xl p-[16px] md:pl-[30px] md:pt-[32px] md:pb-[30px] md:pr-[24px]"
      style={{ boxShadow: "0 0 30px rgba(0,0,0, 0.08)" }}
    >
      {/* IMAGE + RATE */}
      <div className="flex items-center justify-between gap-[12px]">
        {/* image icon*/}
        <div
          className={` ${iconBg} w-[42px] h-[42px] md:w-[52px] md:h-[52px] rounded-xl flex items-center justify-center`}
        >
          {" "}
          {image}
        </div>

        {/* rate */}
        <div className="flex items-center gap-[8px] md:gap-[10px]">
          {rateImage}
          <p className={`text-sm md:text-base font-medium ${rateColor}`}>
            {rate}
          </p>
        </div>
      </div>

      {/* PRICE TEXT LABEL */}
      <div className="mt-[18px] md:mt-[24px]">
        <span className="text-[22px] md:text-[28px] font-semibold">
          {value}
        </span>
        <p className="text-sm font-normal text-muted-foreground mt-[5px]">
          {label}
        </p>
      </div>
    </div>
  );
}
