import React from "react";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between overflow-x-hidden pt-[33px]  pb-[32px] pl-[39px] pr-[40px] border-b border-border  backdrop-blur-2xl bg-white">
      {/* left side */}
      <div className="flex items-center">
        {/* menu icon */}
        <div className=" md:hidden mr-8">
          <Menu />
        </div>

        {/* searchbar container */}
        <div className="relative w-[180px] rounded-2xl flex justify-between py-[11px] pl-[15px] pr-[16px] md:w-full md:max-w-[355px] border border-border">
          <input
            placeholder="Search type of keywords"
            type="text"
            className="min-w-0 flex-1 focus:outline-none placeholder:text-sm md:placeholder:text-base"
          />
          <img
            src="./assets/search-normal.svg"
            alt="Search icon"
            className="shrink-0"
          />
        </div>
      </div>

      {/* right-side */}
      <div className="flex items-center gap-[10px] md:gap-[64px]">
        {/* notication icons */}
        <div className="flex gap-[10px] md:gap-[30px]">
          <img
            src="./assets/notification.svg"
            alt="Bell notification"
            className="h-[24px] w-[24px]"
          />
          <img
            src="./assets/help.svg"
            alt="Help icon"
            className="h-[24px] w-[24px] hidden md:block"
          />
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-[11px] ">
          {/* user image */}
          <div className="rounded-full bg-muted-foreground h-[40px] min-w-[40px]" />
          {/* user text */}
          <div className="hidden md:block">
            <span className="font-semibold text-sm">Laurice</span>
            <p className="">@laurice22</p>
          </div>

          {/* arrow icon */}
          <div className="hidden md:block">
            <img src="./assets/arrow-down.svg" alt="Arrow Down" />
          </div>
        </div>
      </div>
    </div>
  );
}
