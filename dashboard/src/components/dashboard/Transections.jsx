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
    <div>
      <span className=" text-[21px] font-semibold">Transactions</span>

      {/* transections list */}
      <div>
        {transactions.map((item, idx) => (
          <div>
            {/* icon */}
            <div>
              <img src={item.icon} alt={item.label} />
            </div>

            {/* title text */}
            <div>
              <span className=" font-semibold text-base">{item.title}</span>
              <p className="font-regular text-sm text-muted-foreground">
                {item.label}
              </p>
            </div>

            {/* price + date */}
          </div>
        ))}
      </div>
    </div>
  );
}
