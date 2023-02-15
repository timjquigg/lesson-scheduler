import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const usersContext = createContext();

export default function UsersProvider(props) {
  const [users, setUsers] = useState([]);

  const updateUsers = (newUser) => {
    setUsers((prev) => {
      const newUsers = [...prev];
      let found = false;
      for (const index in newUsers) {
        if (users[index].id === newUser.id) {
          found = true;
          newUsers[index] = newUser;
          break;
        }
      }
      if (!found) {
        newUsers.push(newUser);
      }
      return newUsers;
    });
    console.log(newUser);
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
