import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function SigninPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setredirect] = useState(false);

  const authencateUser = (e) => {
    e.preventDefault();
    if (username === "derrick" && password === "12345") {
      setredirect(true);
      console.log("work");
    }
  };

  if (redirect) {
    return <Navigate to="/mainPage" />;
  }

  return (
    <div className="w-3/4 mx-auto flex justify-center items-center  h-[100vh] ">
      <form className="border-2 rounded-2xl p-4 border-primary h-[50vh] shadow-md">
        <div className="text-2xl font-bold text-center text-dark my-4">
          A+ Logistics
        </div>
        <label for="username">Username</label>
        <input
          type="text"
          placeholder="John"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <label for="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button className="mt-4" onClick={authencateUser}>
          Sigin
        </button>
      </form>
    </div>
  );
}

export default SigninPage;
