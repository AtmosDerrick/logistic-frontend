import React, { useState } from "react";
import Menu from "../components/Menu";
import Overview from "../components/Overview";
import Details from "../components/Details";
import Decription from "../components/Decription";
import Nav from "../components/Nav";

function MainPage() {
  const [functionality, setFunctionality] = useState("view");
  return (
    <div>
      <div div className="flex justify-between gap-4 mt-8 p-2">
        <div className="w-1/4 left-1">
          <Menu
            functionality={functionality}
            setFunctionality={setFunctionality}
          />
        </div>

        <div className="w-full">
          <div className="w-full flex justify-center gap-4">
            <div className="w-full mt-2">
              <Details functionality={functionality} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
