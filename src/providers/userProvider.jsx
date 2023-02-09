import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const userContext = createContext();

export default function UserProvider(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.post("/user/login").then((res) => {
      setUser(res.data);
    });
  }, []);

  const signIn = (email, password) => {
    const payload = {
      email,
      password,
    };
    axios.post("/user/login", payload).then((res) => {
      setUser(res.data);
    });
  };

  const signOut = () => {
    axios.post(`/user/logout`).then(() => {
      setUser({});
    });
  };

  const providerData = {
    user,
    signIn,
    signOut,
  };

  return (
    <userContext.Provider value={providerData}>
      {props.children}
    </userContext.Provider>
  );
}
