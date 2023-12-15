import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const CreateOrder = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [Address, setAddress] = useState("");

  const [currentPart, setCurrentPart] = useState(1);
  const [showBack, setShowBack] = useState(1);
  const [itemList, setItemList] = useState(1);
  const [selectedItemType, setSelectedItemType] = useState("");
  const [items, setItems] = useState([]);

  //part 2
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [weight, setWeight] = useState("");
  const [itemsType, setItemType] = useState("");
  const [packageD, setPackageD] = useState("");
  const [handle, setHandle] = useState("");
  const [cost, setCost] = useState(0.0);

  //part3
  const [recieverName, setrecieverName] = useState("");
  const [reciverContact, setreciverContact] = useState("");
  const [recieverEmail, setrecieverEmail] = useState("");
  const [recieversAddress, setrecieversAddress] = useState("");

  const [alert, setAlert] = useState("");

  //setPromt
  const [prompt, setPrompt] = useState(false);

  const { userInfo, token } = useContext(UserContext);

  console.log("user", userInfo.location);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlenext = (e) => {
    // Process the form data or perform validation
    // You can also navigate to the next part if the current part is completed
    if (currentPart < 3) {
      setCurrentPart((prevPart) => prevPart + 1);
    }
  };

  const handleBack = () => {
    if (currentPart > 1) {
      setCurrentPart((prevPart) => prevPart - 1);
      setShowBack(true);
    }
  };

  const calculateProgress = () => {
    return (currentPart - 1) * 50; // Assuming each part contributes 50% to the progress
  };

  const addItem = (e) => {
    e.preventDefault();

    if (itemList >= 1) {
      setItemList((prevPart) => prevPart + 1);
      setItems((prevItems) => [...prevItems, items]);
      setProduct("");
      console.log({ items });
    }
  };

  const subItem = (e) => {
    e.preventDefault();

    if (itemList > 1) {
      setItemList((prevPart) => prevPart - 1);
    }
  };

  const productInfo = {
    // attendance: user.id,
    sender_name: name,

    sender_contact: contact,
    sender_location: userInfo.location,

    product_name: product,
    quantity,

    item_type: itemsType,
    handle_preference: handle,
    price: cost,
    reciever_name: recieverName,
    reciever_contact: reciverContact,
    reciever_address: recieversAddress,
  };

  console.log(userInfo.location.toLowerCase(), "uui");

  const handleSubmit = async () => {
    console.log("llllkkk");

    if (
      name !== "" ||
      contact !== "" ||
      product !== "" ||
      quantity !== "" ||
      recieverName !== "" ||
      reciverContact !== "" ||
      recieversAddress !== ""
    ) {
      await axios
        .post(
          "/product/create/",
          {
            sender_name: name,
            sender_contact: contact,

            // sender_location: user.location,
            package_name: product,
            quantity,
            item_type: itemsType,
            destination: recieversAddress,
            handle_preference: handle,
            price: cost,
            reciever_name: recieverName,
            reciever_contact: reciverContact,
            reciever_address: recieversAddress,
            User: userInfo.User,

            is_cancel: false,
            shipping_confirmation: null,
            arrival_confirmation: null,
          },
          {
            headers: {
              "Content-type": "application/json",
              Authorization: `Token ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setName("");
          setContact("");

          setAddress("");

          setCurrentPart(1);
          setProduct("");
          setQuantity("");

          setrecieverName("");
          setreciverContact("");
          setEmail("");
          setAddress("");
        })
        .catch((err) => {
          console.log(err.response.data);
          setAlert(err.response.data);
        });
    } else {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  };

  const inputClass = "";

  return (
    <div className="w-3/4 mx-auto">
      <div className="w-full  mx-auto bg-gray-200 mt-4 ">
        <div
          className="h-4 bg-[#780000]"
          style={{ width: `${calculateProgress()}%` }}></div>
      </div>
      {alert && (
        <div className="text-center text-lg font-semibold text-red-500 mt-8">
          <h2>{alert}</h2>
        </div>
      )}
      {currentPart === 1 && (
        <div className="mt-12 w-full px-8 mx-auto">
          <h2 className="text-lg font-semibold">Part 1: Sender's Info</h2>
          <form className="mt-12">
            <label>
              Full name:
              <input
                type="text"
                name="firstName"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Contact
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </label>
            <br />
          </form>
        </div>
      )}

      {currentPart === 2 && (
        <div className="mt-12 w-full mx-auto">
          <h2 className="text-lg font-semibold">Part 2: Product Info</h2>
          <form className="mt-12">
            <div className="flex justify-between gap-4">
              <div className="w-full">
                <label>
                  Products {itemList}
                  <input
                    type="text"
                    name="product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                  />
                </label>
              </div>
            </div>

            <div className="flex justify-between gap-4 pt-12">
              <label>
                <input
                  type="quantity"
                  name="quantity"
                  value={quantity}
                  placeholder=" Quantity:"
                  className="p-2 font-medium mr-2 border rounded-md"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </label>

              <label className="flex">
                <select
                  value={itemsType}
                  defaultValue={1}
                  onChange={(e) => setItemType(e.target.value)}
                  className="py-2 px-4  flex items-center mr-2 border rounded-md">
                  <option value="">Select an item type</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Books">Books</option>
                  {/* Add more options as needed */}
                </select>
              </label>
            </div>
            <br />
            <div className="flex justify-between gap-4 mt-8">
              <label>
                <select
                  value={handle}
                  defaultValue={1}
                  onChange={(e) => setHandle(e.target.value)}
                  className="py-2 px-4 w-full flex items-center border rounded-md">
                  <option value="">Handle Preference:</option>
                  <option value="Electronics">Primuime Delivery</option>
                  <option value="Clothing">Free Delivery</option>
                  <option value="Furniture">Breakable</option>
                  {/* Add more options as needed */}
                </select>
              </label>
              <label className="text-primary text-xl font-semibold flex items-center px-8 mt-12">
                Ghc 50.00
              </label>
            </div>

            <br />
          </form>
        </div>
      )}

      {currentPart === 3 && (
        <div className="mt-12 w-3/4 mx-auto">
          <h2 className="text-lg font-semibold">Part 3: Recievers Info</h2>
          <form className="mt-12">
            <label>
              Recievers Full name:
              <input
                type="text"
                name="firstName"
                value={recieverName}
                onChange={(e) => setrecieverName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Reciever Contact
              <input
                type="text"
                value={reciverContact}
                onChange={(e) => setreciverContact(e.target.value)}
              />
            </label>
            <br />

            <br />
            <label>
              Reciever's Address:
              <input
                type="text"
                name="lastName"
                value={recieversAddress}
                onChange={(e) => setrecieversAddress(e.target.value)}
              />
            </label>
          </form>{" "}
        </div>
      )}

      <div className="mx-auto w-full flex justify-between px-8 mt-8 ">
        {currentPart !== 1 ? (
          <div>
            <div
              className="text-gray-900 flex gap-2 cursor-pointer "
              onClick={handleBack}>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </div>
              Back
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="bg-primary text-white py-2 px-8">
          {currentPart !== 3 ? (
            <div className="">
              <div
                className="text-white font-medium flex gap-2 cursor-pointer"
                onClick={handlenext}>
                Next
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <div className=" ">
              <div
                className=" flex gap-2 bg-primary px-4 py-2 font-semibold text-white cursor-pointer"
                onClick={handleSubmit}>
                Submit
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
