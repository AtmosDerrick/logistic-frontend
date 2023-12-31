import React, { useContext } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const Layout = ({ component: RouteComponent, ...rest }) => {
  const { token } = useContext(UserContext);
  return <div>{!!token ? <Outlet /> : <Navigate to={"/signin"} />}</div>;
};

export default Layout;
