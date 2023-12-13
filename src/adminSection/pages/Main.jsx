import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Accounts from "./Accounts";

function Main() {
  const [buttonClick, setButtonClick] = useState("accounts");

  console.log(buttonClick, "ll");

  return (
    <div className=" h-[100vh]">
      <div className="flex gap-2 mx-4">
        <div className="w-1/4">
          <SideBar buttonClick={buttonClick} setButtonClick={setButtonClick} />
        </div>

        <div className="w-full">
          <NavBar />
          <div>{buttonClick === "home" ? <Accounts /> : ""}</div>
          <div>{buttonClick === "orders" ? <Accounts /> : ""}</div>
          <div>{buttonClick === "arrivals" ? <Accounts /> : ""}</div>
          <div>{buttonClick === "shipped" ? <Accounts /> : ""}</div>
          <div>{buttonClick === "accra" ? <Accounts /> : ""}</div>
          <div>{buttonClick === "capecoast" ? <Accounts /> : ""}</div>
          <div>{buttonClick === "kumasi" ? <Accounts /> : ""}</div>
          <div>{buttonClick === "takoradi" ? <Accounts /> : ""}</div>
          <div>{buttonClick === "accounts" ? <Accounts /> : ""}</div>
          <div>{buttonClick === "admin" ? <Accounts /> : ""}</div>
          <div>{buttonClick === "reports" ? <Accounts /> : ""}</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
