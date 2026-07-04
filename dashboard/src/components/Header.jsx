import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between">
      {/* left side */}
      <div>
        {/* searchbar container */}
        <div className="rounded-2xl flex justify-between py-[11px] pl-[15px] pr-[16px] max-w-[355px] border border-border">
          <input
            placeholder="Search type of keywords"
            type="text"
            className="focus:outline-none"
          />
          <img src="./assets/search-normal.svg" alt="Search icon" />
        </div>
      </div>

      {/* right-side */}
      <div className="flex items-center gap-[64px]">
        {/* notication icons */}
        <div className="flex gap-[30px]">
          <img
            src="./assets/notification.svg"
            alt="Bell notification"
            className="h-[24px] w-[24px]"
          />
          <img
            src="./assets/help.svg"
            alt="Help icon"
            className="h-[24px] w-[24px]"
          />
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-[11px]">
          {/* user image */}
          <div className="rounded-full bg-muted-foreground h-[40px] w-[40px]" />
          {/* user text */}
          <div>
            <span className="font-semibold text-sm">Laurice</span>
            <p className="">@laurice22</p>
          </div>

          {/* arrow icon */}
          <div>
            <img src="./assets/arrow-down.svg" alt="Arrow Down" />
          </div>
        </div>
      </div>
    </div>
  );
}
