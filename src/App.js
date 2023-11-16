import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./Pages/IndexPage";
import Layout from "./asset/Layout";
import SigninPage from "./Pages/SigninPage";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <div className="w-full bg-orange-50">
      <div className="w-full mx-auto my-2 px-8 ">
        <Routes>
          <Route path="/" element={<SigninPage />}>
            <Route index element={<IndexPage />} />
            <Route path="/mainPage" element={<MainPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
