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
      className="lg:w-full rounded-2xl pl-[30px] pt-[32px] pb-[30px]"
      style={{ boxShadow: "0 0 30px rgba(0,0,0, 0.08)" }}
    >
      {/* IMAGE + RATE */}
      <div className="flex">
        {/* image icon*/}
        <div
          className={` ${iconBg} w-[52px] h-[52px] rounded-xl flex items-center justify-center`}
        >
          {" "}
          {image}
        </div>

        {/* rate */}
        <div className="flex items-center gap-[10px] ml-[61px]">
          {rateImage}
          <p className={`font-medium ${rateColor}`}>{rate}</p>
        </div>
      </div>

      {/* PRICE TEXT LABEL */}
      <div className="mt-[24px] ">
        <span className="text-[28px] font-semibold">{value}</span>
        <p className="text-sm font-normal text-muted-foreground mt-[5px]">
          {label}
        </p>
      </div>
    </div>
  );
}
