import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

function Decription({ productCode }) {
  const [viewPackages, setViewPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  const { token } = useContext(UserContext);
  useEffect(() => {
    if (productCode != "") {
      // Fetch the list of jobs
      axios
        .get("product/oneproduct/" + productCode, {
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
    }
  }, [productCode]);

  const handleShip = async (condition) => {
    console.log(condition, "working");
    if (condition == null) {
      await axios
        .put(
          "product/oneproduct/" + productCode + "/",

          {
            sender_name: viewPackages.sender_name,
            sender_contact: viewPackages.sender_contact,
            sender_email: viewPackages.sender_email,
            sender_address: viewPackages.sender_address,
            sender_location: viewPackages.sender_location,
            // sender_location: user.location,
            product: viewPackages.product,
            quantity: viewPackages.quantity,
            weight: viewPackages.weight,
            item_type: viewPackages.item_type,
            destination: viewPackages.destination,
            handle_preference: viewPackages.handle_preference,
            price: viewPackages.price,
            reciever_name: viewPackages.reciever_name,
            reciever_contact: viewPackages.reciever_contact,
            reciever_email: viewPackages.reciever_email,
            reciever_address: viewPackages.reciever_address,
            reciever_location: viewPackages.reciever_address,
            User: viewPackages.User,

            is_cancel: viewPackages.is_cancel,
            product_status: viewPackages.product_status,
            product_code: productCode,
          },
          {
            headers: {
              "Content-type": "application/json",
              Authorization: `Token ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          setViewPackages(response.data);
          setLoading(false);
          console.log(viewPackages, "edit");
          // const sortedPackages = [...viewPackages].sort(
          //   (a, b) => new Date(b.datetime) - new Date(a.datetime)
          // );
          // setViewPackages(sortedPackages);
        })
        .catch((error) => {});
    }
  };
  return (
    <div className=" ">
      <div className="p-4 text-lg font-medium text-white bg-primary">
        Package Details
      </div>
      {productCode && (
        <div>
          <ul className="px-4  mt-4">
            <li className="flex justify-between items-center py-2    my-1 border-b-2 ">
              <div className="text-gray-900 font-medium">Order Code</div>
              <div className="text-gray-500 font-medium">{productCode}</div>
            </li>
            <li className="flex justify-between items-center py-2    my-1 border-b-2 ">
              <div className="text-gray-900 font-medium">Product Name</div>
              <div className="text-gray-500 font-medium">
                {viewPackages.product}
              </div>
            </li>
            <li className="flex justify-between items-center py-2    my-1 border-b-2 ">
              <div className="text-gray-900 font-medium">Category</div>
              <div className="text-gray-500 font-medium">
                {viewPackages.handle_preference}
              </div>
            </li>
            <li className="flex justify-between items-center py-2    my-1 border-b-2 ">
              <div className="text-gray-900 font-medium">Destination</div>
              <div className="text-gray-500 font-medium">
                {viewPackages.destination}
              </div>
            </li>
            <li className="flex justify-between items-center py-2    my-1 border-b-2 ">
              <div className="text-gray-900 font-medium">Cost</div>
              <div className="text-gray-500 font-medium">Ghc 100</div>
            </li>
            <li className="flex justify-between items-center py-2    my-1 border-b-2 ">
              <div className="text-gray-900 font-medium">Destination</div>
              <div className="text-gray-500 font-medium">Accra</div>
            </li>
            <li className="flex justify-between items-center py-2    my-1 border-b-2 ">
              <div className="text-gray-900 font-medium">Price</div>
              <div className="text-gray-500 font-medium">
                {viewPackages.price}
              </div>
            </li>
            <li className="flex justify-between items-center py-2    my-1 border-b-2 ">
              <div className="text-gray-900 font-medium">Sender Name</div>
              <div className="text-gray-500 font-medium">
                {viewPackages.sender_name}
              </div>
            </li>
            <li className="flex justify-between items-center py-2    my-1 border-b-2 ">
              <div className="text-gray-900 font-medium">Sender Contact</div>
              <div className="text-gray-500 font-medium">
                {viewPackages.sender_contact}
              </div>
            </li>
          </ul>
          <div className="flex gap-4 px-4 mt-12">
            <div
              className={
                viewPackages.shipping_confirmation == false
                  ? " bg-green-500 w-full text-white text-base text-center  font-medium py-2 hover:opacity-50 hover:cursor-pointer  "
                  : viewPackages.shipping_confirmation == true
                  ? "bg-blue-500 w-full text-white text-base text-center  font-medium py-2 hover:opacity-50 hover:cursor-pointer"
                  : "bg-red-500 w-full text-white text-base text-center  font-medium py-2 hover:opacity-50 hover:cursor-pointer"
              }
              onClick={() => {
                handleShip(viewPackages.shipping_confirmation);
              }}>
              {viewPackages.shipping_confirmation === true
                ? "Waiting Confirmation"
                : viewPackages.shipping_confirmation === false
                ? "Done Shipped"
                : "Ship Package"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Decription;
