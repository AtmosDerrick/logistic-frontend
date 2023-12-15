import { faBan, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import Decription from "./Decription";
import axios from "axios";
import { UserContext } from "../context/UserContext";

function ViewOrder() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("arrivals");
  const [viewPackages, setViewPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productCode, setProductCode] = useState("");

  const { userInfo, setToken, token } = useContext(UserContext);

  console.log(userInfo.location, "locaio");

  useEffect(() => {
    // Fetch the list of jobs
    axios
      .get("product/recieveproduct/" + userInfo.location, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setViewPackages(response.data.data);
        setLoading(false);

        // const sortedPackages = [...viewPackages].sort(
        //   (a, b) => new Date(b.datetime) - new Date(a.datetime)
        // );

        // setViewPackages(sortedPackages);
      })
      .catch((error) => {
        console.log(error.data);
      });
  }, [loading]);

  console.log(productCode, "kk");

  // const buttonClass =
  //   "w-full mx-4 border-4 border-primary text-center py-2 rounded-2xl text-primary font-lg hover:cursor-pointer hover:opacity-50 font-medium shadow-md";
  // const activeButton =
  //   "w-full mx-4 border-4 bg-primary border-primary text-center py-2 rounded-2xl text-white font-lg hover:cursor-pointer hover:opacity-50 font-medium ";
  return (
    <div className="flex justify-between gap-4">
      <div className="w-full justify-between gap-4 mr-4">
        <div className="px-4 text-lg font-semibold text-gray-700 uppercase mt-4">
          Recieved Packages
        </div>
        <div className=" flex  justify-end w-full items-center text-lg my-4 font-semibold text-primary mx-4">
          <div className="flex  justify-start w-full py-2 items-end">
            <div className="border-2  border-primary w-full h-12 mr-2   rounded-xl pl-2 py-2 flex items-center">
              <div className="text-gray-900 mr-4">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <input
                type="text"
                placeholder="Search"
                className=" w-full p-2 text-sm border-primary   focus:outline-none bg-none"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-8 bg-none rounded-2xl h-full p-4">
          <table className="w-full bg-none  border-gray-300 text-left">
            <thead>
              <tr>
                <th className="py-2  border-b px-4">Sender's Name</th>

                <th className="py-2  border-b px-4">Package Name</th>
                <th className="py-2 border-b px-4">Destination</th>
                <th className="py-2 border-b px-4">Date and Time</th>
              </tr>
            </thead>
            <tbody>
              {viewPackages !== "" &&
                viewPackages.map((packageItem) => (
                  <tr
                    key={packageItem.product_code}
                    className="hover:cursor-pointer hover:opacity-80 mb-4"
                    onClick={() => {
                      setProductCode(packageItem.package_code);
                    }}>
                    <td className="py-2 px-4 border-b">
                      {packageItem.sender_name}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {packageItem.package_name}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {packageItem.sender_location}
                    </td>

                    <td className="py-2 px-4 border-b">
                      {packageItem.datetime.split("T")[0]}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {
        <div className="w-2/4 h-[90vh]   bg-gray-100">
          <Decription productCode={productCode} />
        </div>
      }
    </div>
  );
}

export default ViewOrder;
