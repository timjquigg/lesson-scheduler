import { createContext, useEffect, useState } from "react";
import axios from "axios";
// import useSWR from "swr";
// import fetcher from "../../lib/fetcher";

export const userContext = createContext();

export default function UserProvider(props) {
  const [user, setUser] = useState({});

  // Get user if cookie:

  useEffect(() => {
    axios.get("/user").then((res) => {
      setUser(res.data);
    });
  }, []);

  const signIn = (email, password) => {
    axios.get(`/user/${email}&${password}`).then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
  };

  const signOut = () => {
    // Clear cookie
    setUser({});
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
