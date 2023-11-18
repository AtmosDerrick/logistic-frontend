import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    console.log(user, "kkk");
    const fetchUser = async () => {
      try {
        const userInfo = await axios
          .get("auth/user/" + user, {
            headers: {
              "Content-type": "application/json",
              Authorization: `Token ${token}`,
            },
          })
          .then((respond) => {
            setUserInfo(respond.data.data);
            console.log(userInfo);
          });

        // setLoggedIn(false);
      } catch (e) {
        // setCatchPage(true);
      }
    };

    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken, userInfo }}>
      {children}
    </UserContext.Provider>
  );
}
