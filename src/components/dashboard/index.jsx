import Grid from "@mui/material/Unstable_Grid2";
import UserDetails from "./userDetails";

export default function Dashboard(props) {
  return (
    <Grid container spacing={2}>
      <Grid lg={6}>
        <UserDetails />
      </Grid>
      <Grid lg={6}></Grid>
    </Grid>
  );
}
