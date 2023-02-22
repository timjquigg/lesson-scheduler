import {
  Box,
  Dialog,
  DialogContentText,
  DialogTitle,
  Paper,
  Typography,
} from "@mui/material";
import Calendar from "./calendar";
import CalendarForm from "./calendarForm";
import TimeSlots from "./timeSlots";

export default function Scheduler(props) {
  const { open, setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="md">
      <DialogTitle>Book A Lesson</DialogTitle>
      <DialogContentText></DialogContentText>
      <DialogContentText>
        <CalendarForm />
        <Box sx={{ display: "flex", flexDirection: "row", p: "1rem" }}>
          <Calendar width="75%" margin="0.5rem" />
          <TimeSlots width="25%" margin="0.5rem" />
        </Box>
      </DialogContentText>
    </Dialog>
  );
}
