import React from "react";

const transactions = [
  {
    icon: "./assets/live-icons/arrow-up (1).svg",
    title: "Ethereum",
    label: "Received",
    value: "$24,102",
    date: "Today, 19:30",
  },
  {
    icon: "./assets/live-icons/arrow-bottom.svg",
    title: "Bitcoin",
    label: "Buy",
    value: "$4,157",
    date: "Today, 14:32",
  },
  {
    icon: "./assets/live-icons/arrow-bottom.svg",
    title: "Bitcoin",
    label: "Buy",
    value: "$64,784",
    date: "Today, 13:50",
  },
  {
    icon: "./assets/live-icons/arrow-bottom.svg",
    title: "Litecoin",
    label: "Buy",
    value: "$14,265",
    date: "Today, 09:38",
  },
];

export default function Transections() {
  return (
    <div className="xl:w-[320px] ">
      <span className=" text-[21px] font-semibold">Transactions</span>

      {/* transections list */}
      <div className="mt-[24px]">
        {transactions.map((item, idx) => (
          <div className="flex justify-between space-y-[32px]">
            {/* ICON + TEXT */}
            <div className="flex space-x-[10px]">
              <div className="rounded-full border-border border-[1px] p-[8px] ">
                <img src={item.icon} alt={item.label} />
              </div>

              {/* title text */}
              <div>
                <span className=" font-semibold text-base">{item.title}</span>
                <p className="font-regular text-sm text-muted-foreground">
                  {item.label}
                </p>
              </div>
            </div>

            {/* price + date */}
            <div>
              <span className=" font-semibold text-base">{item.value}</span>
              <p className="font-regular text-sm text-muted-foreground">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
