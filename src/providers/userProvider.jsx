import { createContext, useState } from "react";
import useSWR from "swr";
import fetcher from "lib/fetcher";

export const userContext = createContext();

export default function UserProvider(props) {
  const [user, setUser] = useState({});

  // Check for cookie
  if (hasCookie("userId")) {
  }

  const signIn = (email, password) => {
    // Check e-mail & password against db
    // Have db return user object
    // Create cookie with user
    setUser(resposne);
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
