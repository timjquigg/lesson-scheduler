import { Card, Typography } from "@mui/material";

import UserTable from "./userTable";
import Row from "./row";
import useUsers from "../../hooks/useUsers";

export default function UserList(props) {
  return (
    <Card sx={{ m: 2 }}>
      <Typography variant="h4">Users</Typography>

      <UserTable />
    </Card>
  );
}
