import React, { useContext } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

const Layout = ({ component: RouteComponent, ...rest }) => {
  const { user } = UserAuth();
  return <div>{!!user ? <Outlet /> : <Navigate to={"/"} />}</div>;
};

export default Layout;
