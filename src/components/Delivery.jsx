import React, { useContext, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/UserContext";

function Delivery() {
  const [active, setActive] = useState(false);
  const [code, setCode] = useState("");
  const [arrivalPackage, setArrivalPackage] = useState([]);
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const { userInfo, token } = useContext(UserContext);

  const labelClass = "text-lg font-medium text-primary";
  const packageClass = "text-base font-medium text-gray-500";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (arrivalPackage !== "") {
      axios
        .get(
          "product/deliveryproduct/productcode/" +
            code +
            "/location/" +
            userInfo.location.toLowerCase(),
          {
            headers: {
              "Content-type": "application/json",
              Authorization: `Token ${token}`,
            },
          }
        )
        .then((response) => {
          setArrivalPackage(response.data.data);
          setActive(true);

          // const sortedPackages = [...viewPackages].sort(
          //   (a, b) => new Date(b.datetime) - new Date(a.datetime)
          // );

          // setViewPackages(sortedPackages);
        })
        .catch((error) => {});
    } else {
      setAlert(true);
    }
  };

  const handleDeliver = async () => {
    if (arrivalPackage.product_status == "arrival") {
      await axios
        .put(
          "product/oneproduct/" + arrivalPackage.product_code + "/",

          {
            sender_name: arrivalPackage.sender_name,
            sender_contact: arrivalPackage.sender_contact,
            sender_email: arrivalPackage.sender_email,
            sender_address: arrivalPackage.sender_address,
            sender_location: arrivalPackage.sender_location,
            // sender_location: user.location,
            product: arrivalPackage.product,
            quantity: arrivalPackage.quantity,
            weight: arrivalPackage.weight,
            item_type: arrivalPackage.item_type,
            destination: arrivalPackage.destination,
            handle_preference: arrivalPackage.handle_preference,
            price: arrivalPackage.price,
            reciever_name: arrivalPackage.reciever_name,
            reciever_contact: arrivalPackage.reciever_contact,
            reciever_email: arrivalPackage.reciever_email,
            reciever_address: arrivalPackage.reciever_address,
            reciever_location: arrivalPackage.reciever_address,
            User: arrivalPackage.User,

            is_cancel: arrivalPackage.is_cancel,
            product_status: "delivered",
            product_code: arrivalPackage.product_code,
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
          setArrivalPackage(response.data);
          setLoading(false);
          console.log(arrivalPackage, "edit");
          // const sortedPackages = [...viewPackages].sort(
          //   (a, b) => new Date(b.datetime) - new Date(a.datetime)
          // );
          // setViewPackages(sortedPackages);
        })
        .catch((error) => {});
    }
  };
  return (
    <div>
      {" "}
      <div className="w-full flex justify-center   pt-4 gap-4 ">
        <div className="w-full   border-2 bg-lighter  rounded-2xl px-4 ">
          <form className="flex justify-between items-center">
            <input
              type="text"
              className="w-full border-2 border-primary py-4 px-2 mr-4"
              placeholder="Search By Package Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button
              className="w-1/4 text-center shadow-2xl   bg-primary py-2 rounded-2xl text-lg font-semibold leading-10 text-white"
              type="submit"
              onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
      {active && console.log(arrivalPackage, "lplp")}
      {active && (
        <div className="w-full mx-auto mt-4  bg-white rounded-xl">
          {arrivalPackage && arrivalPackage.length !== 0 ? (
            <div>
              <div className="w-full flex justify-end p-4">
                <div>
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-red-500 font-semibold text-2xl hover:opacity-70"
                    onClick={() => {
                      setActive(false);
                    }}
                  />
                </div>
              </div>
              {
                <div className="p-4">
                  <div className="mb-8">
                    <div className="w-1/4 flex justify-between">
                      <div className="mb-4">
                        <h4 className={labelClass}>Product Name</h4>
                        <h5 className={packageClass}>
                          {arrivalPackage.product}
                        </h5>
                      </div>

                      <div className="mb-4">
                        <h5
                          className={
                            arrivalPackage.product_status === "Recieved"
                              ? packageClass + "text-sm bg-red-500 px-4 py-2"
                              : arrivalPackage.product_status === "shipped"
                              ? "text-sm bg-blue-500 px-4 py-2"
                              : arrivalPackage.product_status === "arrival"
                              ? "bg-green-500 px-4 py-2 text-sm"
                              : ""
                          }>
                          {arrivalPackage.product_status}
                        </h5>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className={labelClass}>Product code</h4>
                      <h5 className={packageClass}>
                        {arrivalPackage.product_code}
                      </h5>
                    </div>

                    <div className="mb-4">
                      <h4 className={labelClass}>Handle Preference</h4>
                      <h5 className={packageClass}>
                        {arrivalPackage.handle_preference}
                      </h5>
                    </div>
                  </div>

                  <div className="w-full grid grid-cols-3 ">
                    <div className="w-full ">
                      <h4 className={labelClass}>Recipient Name</h4>
                      <h5 className={packageClass}>
                        {" "}
                        {arrivalPackage.reciever_name}
                      </h5>
                    </div>

                    <div className="w-full ">
                      <h4 className={labelClass}>Destination</h4>
                      <h5 className={packageClass}>
                        {" "}
                        {arrivalPackage.destination}
                      </h5>
                    </div>

                    <div className="w-full ">
                      <h4 className={labelClass}>Reciever's Number</h4>
                      <h5 className={packageClass}>
                        {" "}
                        {arrivalPackage.reciever_contact}
                      </h5>
                    </div>

                    <div className="w-full  mt-4">
                      <h4 className={labelClass}>Sender's Name</h4>
                      <h5 className={packageClass}>
                        {" "}
                        {arrivalPackage.sender_name}
                      </h5>
                    </div>

                    <div className="w-full mt-4 ">
                      <h4 className={labelClass}>Sender Location</h4>
                      <h5 className={packageClass}>
                        {" "}
                        {arrivalPackage.sender_location}
                      </h5>
                    </div>

                    <div className="w-full  mt-4">
                      <h4 className={labelClass}>Sender's Phone</h4>
                      <h5 className={packageClass}>
                        {" "}
                        {arrivalPackage.sender_contact}
                      </h5>
                    </div>
                  </div>
                  <div className="w-1/6 mt-8">
                    <button
                      className="text-white text-lg bg-green-600 px-6 py-2 rounded-md"
                      onClick={handleDeliver}>
                      Deliver
                    </button>
                  </div>
                </div>
              }
            </div>
          ) : (
            <div className="text-xl font-medium text-red-500 py-4 px-4">
              Wrong Input or Item Does not Exist
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Delivery;
