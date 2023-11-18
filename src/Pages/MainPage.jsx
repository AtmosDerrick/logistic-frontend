import React, { useState } from "react";
import Menu from "../components/Menu";
import Overview from "../components/Overview";
import Details from "../components/Details";
import Decription from "../components/Decription";

function MainPage() {
  const [functionality, setFunctionality] = useState("view");
  return (
    <div div className="flex justify-between gap-4 mt-8">
      <div className="w-1/4 left-1">
        <Menu
          functionality={functionality}
          setFunctionality={setFunctionality}
        />
      </div>

      <div className="w-full">
        <div className="w-full flex justify-center gap-4">
          <div className="w-full">
            <div>
              <Overview />
            </div>
            <Details functionality={functionality} />
          </div>

          <div className="w-2/4 right-1 bg-gray-100">
            <Decription />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
