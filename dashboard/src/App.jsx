import React from "react";
import SideBar from "./components/SideBar";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="flex ">
        <div className="sticky top-0 h-screen">
          <SideBar />
        </div>

        <div className="flex-1">
          <div className="z-10 sticky top-0">
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
