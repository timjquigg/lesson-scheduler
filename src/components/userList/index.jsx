import { Card, Typography, Tabs, Tab } from "@mui/material";
import { useState } from "react";

import UserTable from "./userTable";

export default function UserList(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filter = {
    0: "student",
    1: "teacher",
    2: "admin",
  };

  return (
    <Card sx={{ m: 2 }}>
      <Typography variant="h4">Users</Typography>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Students"></Tab>
        <Tab label="Teachers"></Tab>
        <Tab label="Admins"></Tab>
      </Tabs>
      <UserTable filter={filter[value]} />
    </Card>
  );
}
