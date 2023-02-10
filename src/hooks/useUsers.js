import { useEffect, useState } from "react";
import axios from "axios";

export default function useUsers() {
  const [users, setUsers] = useState([]);

  const updateUsers = (newUser) => {
    setUsers((prev) => {
      const newUsers = { ...prev, newUser };
      return newUsers;
    });
  };

  useEffect(() => {
    axios.get("/user").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return { users, updateUsers };
}
