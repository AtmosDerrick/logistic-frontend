import React, { useState } from "react";

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
  const [Weight, setWeight] = useState("");
  const [itemsType, setItemType] = useState("");
  const [packageD, setPackageD] = useState("");
  const [handle, setHandle] = useState("");
  const [cost, setCost] = useState(0.0);

  //part3
  const [recieverName, setrecieverName] = useState("");
  const [reciverContact, setreciverContact] = useState("");
  const [recieverEmail, setrecieverEmail] = useState("");
  const [recieversAddress, setrecieversAddress] = useState("");

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

  return (
    <div>
      <div className="w-3/4 mx-auto bg-gray-200 mt-4 ">
        <div
          className="h-4 bg-blue-500"
          style={{ width: `${calculateProgress()}%` }}></div>
      </div>
      {currentPart === 1 && (
        <div className="mt-4 w-3/4 mx-auto">
          <h2 className="text-lg font-semibold">Part 1: Sender's Info</h2>
          <form>
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
            <label>
              Email
              <input
                type="text"
                name="lastName"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Address:
              <input
                type="text"
                name="lastName"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
          </form>
        </div>
      )}

      {currentPart === 2 && (
        <div className="mt-4 w-full mx-auto">
          <h2 className="text-lg font-semibold">Part 2: Product Info</h2>
          <form>
            <div className="flex justify-between gap-4">
              <div className="w-full">
                {" "}
                <label>
                  Products {itemList}
                  <input
                    type="email"
                    name="email"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                  />
                </label>
              </div>
              <div className="flex items-center w-1/4">
                <div className="flex justify-between gap-4">
                  <button
                    className="text-center bg-primary w-10 h-10 cursor-pointer"
                    onClick={addItem}>
                    +
                  </button>
                  <button
                    className="text-center bg-primary w-10 h-10 cursor-pointer"
                    onClick={subItem}>
                    -
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-4">
              {" "}
              <label>
                Quantity:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                Weight:
                <input
                  type="email"
                  name="email"
                  value={Weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </label>
              <label>
                Item Type:
                <select
                  value={itemsType}
                  onChange={(e) => setItemType(e.target.value)}
                  className="py-2 px-4 rounded-2xl flex items-center">
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
            <div className="flex justify-between gap-4">
              <label>
                Product Destination
                <select
                  value={itemsType}
                  onChange={(e) => setItemType(e.target.value)}
                  className="py-2 px-4 rounded-2xl flex items-center">
                  <option value="">Select an item type</option>
                  <option value="Electronics">Greater Accra</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Books">Books</option>
                  {/* Add more options as needed */}
                </select>
              </label>
              <label>
                Handle Preference:
                <select
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  className="py-2 px-4 rounded-2xl flex items-center">
                  <option value="">Select an item type</option>
                  <option value="Electronics">Primuime Delivery</option>
                  <option value="Clothing">Free Delivery</option>
                  <option value="Furniture">Breakable</option>
                  {/* Add more options as needed */}
                </select>
              </label>
              <label className="text-primary text-xl font-semibold flex items-center px-8">
                Ghc 50.00
              </label>
            </div>
            <br />
          </form>
        </div>
      )}

      {currentPart === 3 && (
        <div className="mt-4 w-3/4 mx-auto">
          <h2 className="text-lg font-semibold">Part 3: Recievers Info</h2>
          <form>
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
            <label>
              Reciever's Email
              <input
                type="text"
                name="lastName"
                value={recieverEmail}
                onChange={(e) => setrecieverEmail(e.target.value)}
              />
            </label>
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

      <div className="mx-auto w-3/4 flex justify-between px-4">
        {currentPart !== 1 ? (
          <div>
            <div className="text-gray-900 flex gap-2 " onClick={handleBack}>
              <div>
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

        <div className="">
          {currentPart !== 3 ? (
            <div className="">
              <div className="text-gray-900 flex gap-2" onClick={handlenext}>
                Next{" "}
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
                className="text-gray-900 flex gap-2 bg-primary px-4 py-2 font-semibold text-white"
                onClick={handlenext}>
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
