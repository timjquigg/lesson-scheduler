import { Card, Typography, Tabs, Tab } from "@mui/material";
import { Fragment, useState } from "react";
import useUsers from "../../hooks/useUsers";

import UserTable from "./userTable";

export default function UserList(props) {
  const { users, updateUsers } = useUsers();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filter = {
    0: "student",
    1: "teacher",
    2: "admin",
  };

  const students = users.filter((user) => {
    return user.student;
  });
  const teachers = users.filter((user) => {
    return user.teacher;
  });
  const admins = users.filter((user) => {
    return user.admin;
  });

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
