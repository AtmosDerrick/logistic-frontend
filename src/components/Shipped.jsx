import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

function Shipped() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("arrivals");
  const [viewPackages, setViewPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  const { userInfo, token } = useContext(UserContext);

  useEffect(() => {
    // Fetch the list of jobs
    axios
      .get("product/shippingproduct/" + userInfo.location.toLowerCase(), {
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
      .catch((error) => {});
  }, [loading]);

  // const buttonClass =
  //   "w-full mx-4 border-4 border-primary text-center py-2 rounded-2xl text-primary font-lg hover:cursor-pointer hover:opacity-50 font-medium shadow-md";
  // const activeButton =
  //   "w-full mx-4 border-4 bg-primary border-primary text-center py-2 rounded-2xl text-white font-lg hover:cursor-pointer hover:opacity-50 font-medium ";
  return (
    <div>
      <div className="px-4 text-lg font-semibold text-gray-700 uppercase mt-4">
        Shipped Packages
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
                  key={packageItem.id}
                  className="hover:cursor-pointer hover:opacity-80">
                  <td className="py-2 px-4 border-b">
                    {packageItem.sender_name}
                  </td>

                  <td className="py-2 px-4 border-b">{packageItem.product}</td>
                  <td className="py-2 px-4 border-b">
                    {packageItem.destination}
                  </td>

                  <td className="py-2 px-4 border-b">{packageItem.datetime}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Shipped;
