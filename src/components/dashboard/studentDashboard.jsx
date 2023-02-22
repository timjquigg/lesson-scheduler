import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";
import Appointments from "../appointments";
import UserDetails from "./userDetails";
import Scheduler from "../scheduler";

export default function StudentDashboard(props) {
  const [openCalendar, setOpenCalendar] = useState(false);

  const handleAddLesson = () => {
    setOpenCalendar(true);
  };

  return (
    <>
      <Grid container spacing={2} columns={12}>
        <Grid md={6} xs={12}>
          <UserDetails />
          <Button variant="contained">Update Account</Button>
        </Grid>
        <Grid md={6} xs={12}>
          <Appointments admin={false} />
          <Button variant="contained" onClick={handleAddLesson}>
            Book Lesson
          </Button>
        </Grid>
      </Grid>
      <Scheduler open={openCalendar} setOpen={setOpenCalendar} />
    </>
  );
}
