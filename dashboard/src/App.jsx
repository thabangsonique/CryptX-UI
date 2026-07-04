import React from "react";
import SideBar from "./components/SideBar";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="flex gap-[39px]">
        <SideBar />
        <div className="flex-1 pt-[32px] pr-[40px]">
          <Header />

          <div>
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}
