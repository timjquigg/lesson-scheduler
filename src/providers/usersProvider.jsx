import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const usersContext = createContext();

export default function UsersProvider(props) {
  const [users, setUsers] = useState([]);

  const updateUsers = (newUser) => {
    setUsers((prev) => {
      const newUsers = [...prev];
      for (const index in newUsers) {
        if (users[index].id === newUser.id) {
          newUsers[index] = newUser;
          return newUsers;
        }
      }
      newUsers.push(newUser);
      return newUsers;
    });
  };

  useEffect(() => {
    axios.get("/user").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const providerData = {
    users,
    updateUsers,
  };

  return (
    <usersContext.Provider value={providerData}>
      {props.children}
    </usersContext.Provider>
  );
}
