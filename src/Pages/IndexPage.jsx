import React from "react";
import { Link } from "react-router-dom";
import landingImage from "../images/delivery.jpg";

function IndexPage() {
  return (
    <div className="h-[90vh] overflow-hidden rounded-2xl">
      <div className="absolute z-50 flex items-center h-[60vh]">
        <div>
          <div className="text-4xl font-sans pl-4 font-bold text-primary uppercase">
            Deliver your Items<br></br> Faster, Safer & Cheaper
          </div>
          <div className="pl-4 mt-8 ">
            <Link
              to="/signin"
              className=" shadow-md cursor-pointer bg-gradient-to-r from-primary to-darkprimary px-8 py-2 rounded-2xl text-lg font-semibold text-white">
              Sigin In
            </Link>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={landingImage} alt="image" className="w-full" />
      </div>
    </div>
  );
}

export default IndexPage;
