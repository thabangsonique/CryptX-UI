import React from "react";
import SideBar from "./components/SideBar";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="flex ">
        <SideBar />
        <div className="flex-1">
          <div className="fixed left-[267px] right-0">
            <Header />
          </div>

          <div className=" min-h-screen">
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}
