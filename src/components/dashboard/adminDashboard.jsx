import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import UsersProvider from "../../providers/usersProvider";
import UserDetailsForm from "../userDetailsForm";
import UserList from "../userList";
import Appointments from "../appointments";

export default function AdminDashboard(props) {
  const [openUserForm, setOpenUserForm] = useState(false);
  // const [openCalendar, setOpenCalendar] = useState(false);

  const handleAddUser = () => {
    setOpenUserForm(true);
  };

  return (
    <UsersProvider>
      <Grid container spacing={2} columns={12}>
        <Grid md={5} xs={12}>
          <UserList />
          <Button variant="contained" onClick={handleAddUser}>
            Add User
          </Button>
          <UserDetailsForm open={openUserForm} setOpen={setOpenUserForm} />
        </Grid>
        <Grid md={7} xs={12}>
          <Appointments admin={true} />
        </Grid>
      </Grid>
    </UsersProvider>
  );
}
