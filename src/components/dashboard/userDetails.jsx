import { Card, Typography } from "@mui/material";
import { useContext } from "react";
import { userContext } from "../../providers/userProvider";
import makeTitleCase from "../../helpers/makeTitleCase";

export default function UserDetails(props) {
  const { user } = useContext(userContext);
  return (
    <Card sx={{ m: 2 }}>
      <Typography variant="h4">User</Typography>
      <Typography>
        {makeTitleCase(user.first_name)} {makeTitleCase(user.last_name)}
      </Typography>
      <Typography>{user.email}</Typography>
    </Card>
  );
}
