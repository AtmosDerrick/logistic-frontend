import {
  faCaretLeft,
  faCaretRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";
import AddAccount from "../components/AddAccount";

function Accounts() {
  const accountsClass =
    "py-2 px-6 shadow-lg rounded-lg hover:cursor-pointer mx-4  border-2 border-blue-500 text-blue-500 bg-transparent  ";
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20); // Initialize with a default value
  const [displayList, setDisplayList] = useState([]);
  const [active, setActive] = useState("worker");
  const [accountActive, setAccountActive] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const employees = [
    {
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      email: "john.doe@example.com",
      telephone: "555-1234",
      role: "worker",
      location: "New York",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      username: "janesmith",
      email: "jane.smith@example.com",
      telephone: "555-5678",
      role: "admin",
      location: "San Francisco",
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      username: "bobjohnson",
      email: "bob.johnson@example.com",
      telephone: "555-9876",
      role: "driver",
      location: "Chicago",
    },
    {
      firstName: "Alice",
      lastName: "Williams",
      username: "alicewilliams",
      email: "alice.williams@example.com",
      telephone: "555-4321",
      role: "worker",
      location: "Los Angeles",
    },
    {
      firstName: "Chris",
      lastName: "Miller",
      username: "chrismiller",
      email: "chris.miller@example.com",
      telephone: "555-8765",
      role: "admin",
      location: "Seattle",
    },
    {
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      email: "john.doe@example.com",
      telephone: "555-1234",
      role: "worker",
      location: "New York",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      username: "janesmith",
      email: "jane.smith@example.com",
      telephone: "555-5678",
      role: "admin",
      location: "San Francisco",
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      username: "bobjohnson",
      email: "bob.johnson@example.com",
      telephone: "555-9876",
      role: "driver",
      location: "Chicago",
    },
    {
      firstName: "Alice",
      lastName: "Williams",
      username: "alicewilliams",
      email: "alice.williams@example.com",
      telephone: "555-4321",
      role: "worker",
      location: "Los Angeles",
    },
    {
      firstName: "Chris",
      lastName: "Miller",
      username: "chrismiller",
      email: "chris.miller@example.com",
      telephone: "555-8765",
      role: "admin",
      location: "Seattle",
    },
    // Add 15 more employee objects with similar structure and unique data

    {
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      email: "john.doe@example.com",
      telephone: "555-1234",
      role: "worker",
      location: "New York",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      username: "janesmith",
      email: "jane.smith@example.com",
      telephone: "555-5678",
      role: "admin",
      location: "San Francisco",
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      username: "bobjohnson",
      email: "bob.johnson@example.com",
      telephone: "555-9876",
      role: "driver",
      location: "Chicago",
    },
    {
      firstName: "Alice",
      lastName: "Williams",
      username: "alicewilliams",
      email: "alice.williams@example.com",
      telephone: "555-4321",
      role: "worker",
      location: "Los Angeles",
    },
    {
      firstName: "Chris",
      lastName: "Miller",
      username: "chrismiller",
      email: "chris.miller@example.com",
      telephone: "555-8765",
      role: "admin",
      location: "Seattle",
    },
    {
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      email: "john.doe@example.com",
      telephone: "555-1234",
      role: "worker",
      location: "New York",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      username: "janesmith",
      email: "jane.smith@example.com",
      telephone: "555-5678",
      role: "admin",
      location: "San Francisco",
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      username: "bobjohnson",
      email: "bob.johnson@example.com",
      telephone: "555-9876",
      role: "driver",
      location: "Chicago",
    },
    {
      firstName: "Alice",
      lastName: "Williams",
      username: "alicewilliams",
      email: "alice.williams@example.com",
      telephone: "555-4321",
      role: "worker",
      location: "Los Angeles",
    },
    {
      firstName: "Chris",
      lastName: "Miller",
      username: "chrismiller",
      email: "chris.miller@example.com",
      telephone: "555-8765",
      role: "admin",
      location: "Seattle",
    },

    {
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      email: "john.doe@example.com",
      telephone: "555-1234",
      role: "worker",
      location: "New York",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      username: "janesmith",
      email: "jane.smith@example.com",
      telephone: "555-5678",
      role: "admin",
      location: "San Francisco",
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      username: "bobjohnson",
      email: "bob.johnson@example.com",
      telephone: "555-9876",
      role: "driver",
      location: "Chicago",
    },
    {
      firstName: "Alice",
      lastName: "Williams",
      username: "alicewilliams",
      email: "alice.williams@example.com",
      telephone: "555-4321",
      role: "worker",
      location: "Los Angeles",
    },
    {
      firstName: "Chris",
      lastName: "Miller",
      username: "chrismiller",
      email: "chris.miller@example.com",
      telephone: "555-8765",
      role: "admin",
      location: "Seattle",
    },
    {
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      email: "john.doe@example.com",
      telephone: "555-1234",
      role: "worker",
      location: "New York",
    },
  ];

  let numberOfItemsPerPage = 10;

  const indexOfLastItem = (currentPage + 1) * numberOfItemsPerPage;

  //  const handlePageClick = ({ selected }) => {
  //    if (selected === 0) {
  //      selected = selected + 1;
  //    }
  //    axios
  //      .get("/coupons/?page=" + selected + "&page_count=" + itemsPerPage, {
  //        headers: {
  //          "Content-type": "application/json",
  //          Authorization: `Token ${token}`,
  //        },
  //      })
  //      .then((respond) => {
  //        setCoupons1(respond.data);
  //        setLoading(false);
  //      });
  //    setCurrentPage(selected);
  //  };

  // useEffect(() => {
  //   setDisplayList(employees);
  // }, []);

  const workerFilter = () => {
    const workers = employees.filter((item) => {
      return item.role === "worker";
    });
    setDisplayList(workers);
    setActive("worker");
  };

  const driverFilter = () => {
    const workers = employees.filter((item) => {
      return item.role === "driver";
    });
    setDisplayList(workers);
    setActive("driver");
  };

  if (accountActive) {
    return (
      <div className="">
        <div className="w-full mt-12 ">
          <div className="  ">
            <AddAccount
              accountActive={accountActive}
              setAccountActive={setAccountActive}
              successful={successful}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full ">
      <div className="w-full relative ">
        <div className="w-full mt-4 border-b-2 border-gray-300 pb-4">
          <div className="flex justify-between  items-center">
            <div className="text-lg font-semibold mt-8 flex justify-start w-1/4 ">
              <button
                className={
                  active != "worker" ? accountsClass : "bg-blue-500 text-white"
                }
                onClick={workerFilter}>
                Workers
              </button>
              <button
                className={
                  active != "driver" ? accountsClass : "bg-blue-500 text-white"
                }
                onClick={driverFilter}>
                Drivers
              </button>
            </div>
            <div
              className=" text-blue-600 text-xl font-semibold hover:opacity-60 hover:cursor-pointer px-6  flex font-mediumbold items-center gap-4  "
              onClick={() => {
                setAccountActive(!accountActive);
                console.log(accountActive);
              }}>
              <div>
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <h3>Add Account</h3>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-4">
            <table className=" bg-white  w-full">
              <thead>
                <tr className="text-left">
                  <th className="py-2 px-4 border-b">First Name</th>
                  <th className="py-2 px-4 border-b">Last Name</th>
                  <th className="py-2 px-4 border-b">Username</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Telephone</th>
                  <th className="py-2 px-4 border-b">Role</th>
                  <th className="py-2 px-4 border-b">Location</th>
                </tr>
              </thead>
              <tbody>
                {displayList.map((employee, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{employee.firstName}</td>
                    <td className="py-2 px-4 border-b">{employee.lastName}</td>
                    <td className="py-2 px-4 border-b">{employee.username}</td>
                    <td className="py-2 px-4 border-b">{employee.email}</td>
                    <td className="py-2 px-4 border-b">{employee.telephone}</td>
                    <td className="py-2 px-4 border-b">{employee.role}</td>
                    <td className="py-2 px-4 border-b">{employee.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="w-full flex justify-between mt-8 text-primary">
              <div>
                <label htmlFor="itemsPerPage ">Items per page: </label>
                <select
                  id="itemsPerPage"
                  name="itemsPerPage"
                  className="ml-4 border-1 border-primary rounded-lg"
                  value={itemsPerPage}>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>
              <ReactPaginate
                previousLabel={<FontAwesomeIcon icon={faCaretLeft} />}
                nextLabel={<FontAwesomeIcon icon={faCaretRight} />}
                breakLabel={"..."}
                pageCount={Math.ceil(displayList.length / itemsPerPage)}
                containerClassName={
                  " my-0  flex gap-4  mr-4 font-bold  text-primary-100 "
                }
                pageLinkClassName={
                  "w-6 h-6 flex items-center text-sm justify-center rounded-full border-primary border-2 text-primary "
                }
                activeLinkClassName={
                  " text-white w-6 h-6 flex items-center text-sm justify-center rounded-full bg-primary "
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
