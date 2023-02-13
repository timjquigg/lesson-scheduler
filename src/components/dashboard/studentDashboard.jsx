import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";
import Appointments from "../appointments";
import UserDetails from "./userDetails";

export default function StudentDashboard(props) {
  return (
    <Grid container spacing={2} columns={12}>
      <Grid md={6} xs={12}>
        <UserDetails />
        <Button variant="contained">Update Account</Button>
      </Grid>
      <Grid md={6} xs={12}>
        <Appointments />
        <Button variant="contained">Book Lesson</Button>
      </Grid>
    </Grid>
  );
}
