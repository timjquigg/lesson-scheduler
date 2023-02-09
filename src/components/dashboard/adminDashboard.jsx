import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import UserList from "../userList";

export default function AdminDashboard(props) {
  return (
    <Grid container spacing={2} columns={12}>
      <Grid md={6} xs={12}>
        <UserList />
        <Button variant="contained">Add User</Button>
      </Grid>
    </Grid>
  );
}
