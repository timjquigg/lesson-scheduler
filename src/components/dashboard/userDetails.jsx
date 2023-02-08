import { Card, Typography } from "@mui/material";
import { useContext } from "react";
import { userContext } from "../../providers/userProvider";

export default function UserDetails(props) {
  const { user } = useContext(userContext);
  return (
    <Card sx={{ m: 2 }}>
      <Typography variant="h4">User</Typography>
      <Typography>
        {user.first_name} {user.last_name}
      </Typography>
      <Typography>{user.email}</Typography>
    </Card>
  );
}
