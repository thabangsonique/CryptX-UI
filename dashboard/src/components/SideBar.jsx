import { LayoutDashboard } from "lucide-react";
import React from "react";

const menu = [
  {
    icon: "./assets/element-3.svg",
    title: "Overview",
  },
  {
    icon: "./assets/graph.svg",
    title: "Chart",
  },
  {
    icon: "./assets/wallet-2.svg",
    title: "Transection",
  },
  {
    icon: "./assets/wallet-minus.svg",
    title: "Wallet",
  },
  {
    icon: "./assets/sms.svg",
    title: "Mail Box",
  },
  {
    icon: "./assets/setting-2.svg",
    title: "Settings",
  },
  {
    icon: "./assets/logout.svg",
    title: "Logout",
  },
];

export default function SideBar() {
  return (
    <div className="bg-[#f3f3f3] pl-[40px] pr-[57px] pt-[32px] min-h-screen">
      {/* logo */}
      <div>
        <img src="./assets/Logo.svg" alt="CryptX Logo" />
      </div>

      {/* menu selection */}
      <div className="overflow-y-auto mt-[63px]">
        <div className="space-y-[32px]">
          {" "}
          {menu.map((menuItem, idx) => (
            // conditional
            <div key={idx}>
              {idx === 0 ? (
                <div className="flex justify-between items-center gap-[20px]">
                  {/* icon */}
                  <div className="flex gap-[20px]">
                    {" "}
                    <img src={menuItem.icon} alt={menuItem.title} />
                    <span className="text-primary font-semibold">
                      {menuItem.title}
                    </span>
                  </div>

                  {/* dot */}
                  <div className="rounded-full bg-primary h-[10px] w-[10px]" />
                </div>
              ) : (
                <div className="flex items-center gap-[20px]">
                  {/* icon */}
                  <img src={menuItem.icon} alt={menuItem.title} />
                  <span className="text-muted-foreground">
                    {menuItem.title}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
