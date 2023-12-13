import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState("");

  return (
    <UserContext.Provider
      value={{ user, setUser, token, setToken, userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}
