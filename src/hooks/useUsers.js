import { useEffect, useState } from "react";
import axios from "axios";

export default function useUsers() {
  const [users, setUsers] = useState([]);

  const updateUsers = (newUser) => {
    //
  };

  useEffect(() => {
    axios.get("/user/").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return { users, updateUsers };
}
