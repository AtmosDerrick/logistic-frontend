import React from "react";
import SideBar from "../components/SideBar";
import Main from "./Main";

function AdminHome() {
  return (
    <div className="flex gap-2 mx-4">
      <div className="w-1/4">
        <SideBar />
      </div>
      <div className="w-full">
        <Main />
      </div>
    </div>
  );
}

export default AdminHome;
