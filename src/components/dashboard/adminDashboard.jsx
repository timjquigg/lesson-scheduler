import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import UsersProvider from "../../providers/usersProvider";
import UserDetailsForm from "../userDetailsForm";
import UserList from "../userList";

export default function AdminDashboard(props) {
  const [open, setOpen] = useState(false);

  const handleAddUser = () => {
    setOpen(true);
  };

  return (
    <UsersProvider>
      <Grid container spacing={2} columns={12}>
        <Grid md={6} xs={12}>
          <UserList />
          <Button variant="contained" onClick={handleAddUser}>
            Add User
          </Button>
          <UserDetailsForm open={open} setOpen={setOpen} />
        </Grid>
      </Grid>
    </UsersProvider>
  );
}
