import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./Pages/IndexPage";
import Layout from "./asset/Layout";
import SigninPage from "./Pages/SigninPage";
import MainPage from "./Pages/MainPage";
import { UserContext, UserContextProvider } from "./context/UserContext";

function App() {
  axios.defaults.baseURL = "http://127.0.0.1:8000/";
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <div className="w-full bg-orange-50">
        <div className="w-full mx-auto my-2 px-8 ">
          <Routes>
            <Route path="/signin" element={<SigninPage />} />

            <Route path="/" element={<Layout />}>
              <Route index element={<MainPage />} />
              <Route path="/signin" element={<SigninPage />} />
              <Route path="/mainPage" element={<MainPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
