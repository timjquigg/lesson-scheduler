import { useState, useEffect, useContext } from "react";
import { Card, Typography, Tabs, Tab } from "@mui/material";
// import useUsers from "../../hooks/useUsers";

import UserTable from "./userTable";
import { usersContext } from "../../providers/usersProvider";

export default function UserList(props) {
  const { users, updateUsers } = useContext(usersContext);
  const [value, setValue] = useState(0);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [admins, setAdmins] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setStudents(
      users.filter((user) => {
        return user.student;
      })
    );
    setTeachers(
      users.filter((user) => {
        return user.teacher;
      })
    );
    setAdmins(
      users.filter((user) => {
        return user.admin;
      })
    );
  }, [users]);

  return (
    <Card sx={{ m: 2 }}>
      <Typography variant="h4">Users</Typography>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Students"></Tab>
        <Tab label="Teachers"></Tab>
        <Tab label="Admins"></Tab>
      </Tabs>
      <div hidden={value !== 0}>
        <UserTable users={students} />
      </div>
      <div hidden={value !== 1}>
        <UserTable users={teachers} />
      </div>
      <div hidden={value !== 2}>
        <UserTable users={admins} />
      </div>
    </Card>
  );
}
