import React from "react";

function Overview() {
  return (
    <div className="w-full rounded-2xl h-[15vh] bg-gray-100">
      <div className="grid grid-cols-4 p-4 gap-4">
        <div>
          <div className="text-base text-gray-500 w-full text-center">
            New Orders
          </div>
          <div className="border-r-2">
            <div className="text-2xl font-medium text-center font-sans">
              150
            </div>
            <div className="text-center text-green-500 font-semibold">25%</div>
          </div>
        </div>

        <div>
          <div className="text-base text-gray-500 w-full text-center">
            Orders Ship{" "}
          </div>
          <div>
            <div className="border-r-2">
              <div className="text-2xl font-medium text-center font-sans">
                059
              </div>
              <div className="text-center text-primary font-semibold">10%</div>
            </div>
          </div>{" "}
        </div>

        <div>
          <div className="text-base text-gray-500 w-full text-center">
            Orders Recieve
          </div>
          <div>
            <div className="border-r-2">
              <div className="text-2xl font-medium text-center font-sans">
                110
              </div>
              <div className="text-center text-primary font-semibold">50%</div>
            </div>
          </div>{" "}
        </div>

        <div>
          <div className="text-base text-gray-500 w-full text-center">
            Orders cancel
          </div>
          <div>
            <div className="">
              <div className="text-2xl font-medium text-center font-sans">
                005
              </div>
              <div className="text-center text-primary font-semibold">1%</div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Overview;
