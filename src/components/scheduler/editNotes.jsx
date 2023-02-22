import {
  Dialog,
  DialogContentText,
  DialogTitle,
  DialogContent,
  Typography,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

export default function EditNotes(props) {
  const { appointment, open, setOpen, remove } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    remove(appointment.id);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth={true}>
      <DialogTitle>Edit Lesson</DialogTitle>
      <DialogContentText></DialogContentText>
      <DialogContent>
        <Typography>Notes</Typography>
        <TextField fullWidth value={appointment.notes || ""} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDelete}>Delete</Button>
        <Button onClick={handleClose}>Cancel</Button>
        <Button>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
