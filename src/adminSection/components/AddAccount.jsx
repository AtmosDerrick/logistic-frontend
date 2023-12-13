import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

function AddAccount({ setAccountActive, setSuccessful, successful }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    address: "",
    telephone: "",
    location: "",
    ghanacard: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("");

  const { userInfo, token } = useContext(UserContext);

  // Update form field values when input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle user registration
  const handleUserRegistration = async () => {
    try {
      const response = await axios.post(
        "/auth/signup/",
        {
          username: formData.username,
          password: formData.password,
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          role: role,
          address: formData.address,
          telephone: formData.telephone,
          ghanacard_no: formData.ghanacard,
          location: formData.location,
          ProfileImage: selectedFile,
        },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${token}`,
          },
        }
      );

      setUserId(response.data.user.id);
      setSuccessful(true);
    } catch (error) {
      console.error("Error during user registration:", error);
      // Handle errors appropriately
    }
  };

  //   // Handle profile creation
  //   const handleProfileCreation = async () => {
  //     try {
  //       const formDataForProfile = new FormData();
  //       formDataForProfile.append("User", userId);
  //       formDataForProfile.append("username", formData.username);
  //       formDataForProfile.append("password", formData.password);
  //       formDataForProfile.append("first_name", formData.firstName);
  //       formDataForProfile.append("last_name", formData.lastName);
  //       formDataForProfile.append("email", formData.email);
  //       formDataForProfile.append("role", role);
  //       formDataForProfile.append("address", formData.address);
  //       formDataForProfile.append("telephone", formData.telephone);
  //       formDataForProfile.append("ghanacard_no", formData.ghanacard);
  //       formDataForProfile.append("location", formData.location);
  //       formDataForProfile.append("profileImage", selectedFile);

  //       await axios.post("/auth/profile/", formDataForProfile, {
  //         headers: {
  //           "Content-type": "multipart/form-data",
  //           Authorization: `Token ${token}`,
  //         },
  //       });
  //     } catch (error) {
  //       console.error("Error during profile creation:", error);
  //       // Handle errors appropriately
  //     }
  //   };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    try {
      await handleUserRegistration();

      setFormData({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        address: "",
        telephone: "",
        location: "",
        ghanacard: "",
      });

      setRole("");

      console.log(userId);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle errors appropriately, show error messages, etc.
    }
  };

  const inputClass = "rounded-md";
  const label = "text-lg";

  return (
    <div className="rounded-2xl shadow-md px-8 z-20 py-4 ">
      {successful ? (
        <div className="w-full text-xl bg-green-500 py-2 px-8 text-center">
          {role} add successful
        </div>
      ) : (
        ""
      )}
      <div className="flex justify-between mx-2 py-4">
        <div className="text-xl italic font-bold text-blue-500">
          Sign Up New Worker
        </div>
        <div className="" onClick={() => setAccountActive(false)}>
          X
        </div>
      </div>
      <div>
        <form className="w-full grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              className={inputClass}
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className={label}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={inputClass}
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="firstName" className={label}>
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={inputClass}
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className={label}>
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={inputClass}
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className={label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={inputClass}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="role" className={label}>
              Role:
            </label>
            <br></br>
            <select
              id="role"
              name="role"
              className="w-full border my-2 py-2 px-3 rounded-md h-12"
              value={role || ""} // Ensure that null is converted to an empty string
              onChange={(e) => {
                setRole(e.target.value);
                console.log(e.target.value);
              }}
              required>
              <option value="">Select Role</option>
              <option value="worker">Worker</option>
              <option value="driver">Driver</option>
            </select>
          </div>

          <div>
            <label htmlFor="address" className={label}>
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className={inputClass}
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="telephone" className={label}>
              Telephone
            </label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              className={inputClass}
              value={formData.telephone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="location" className={label}>
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className={inputClass}
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="ghanacard" className={label}>
              Ghana Card No.
            </label>
            <input
              type="text"
              id="ghanacard"
              name="ghanacard"
              className={inputClass}
              value={formData.ghanacard}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="imageUpload">Upload Image:</label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*" // Restrict to image files
              onChange={(event) => {
                const file = event.target.files[0];
                setSelectedFile(file);
              }}
            />
          </div>
        </form>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/4 bg-blue-500 mt-8 py-4 rounded-lg"
            onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddAccount;
