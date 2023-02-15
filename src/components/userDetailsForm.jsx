// import { useContext } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  TextField,
  Checkbox,
} from "@mui/material";
import useUserDetails from "../hooks/useUserDetails";
// import { usersContext } from "../providers/usersProvider";

export default function UserDetailsForm(props) {
  const open = props.open;
  const setOpen = props.setOpen;

  // const { updateUsers } = useContext(usersContext);
  // console.log(updateUsers);

  const {
    firstName,
    lastName,
    email,
    phone,
    address1,
    address2,
    city,
    province,
    country,
    postalCode,
    student,
    teacher,
    admin,
    resetUser,
    updateFirstName,
    updateLastName,
    updateEmail,
    updatePhone,
    updateAddress1,
    updateAddress2,
    updateCity,
    updateProvince,
    updateCountry,
    updatePostalCode,
    updateStudent,
    updateTeacher,
    updateAdmin,
    saveUpdates,
  } = useUserDetails(props.user);

  const handleClose = () => {
    setOpen(false);
    resetUser();
  };

  const handleSave = () => {
    saveUpdates().then(() => {
      setOpen(false);
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{props.user ? "Edit User" : "Create User"}</DialogTitle>
      <DialogContentText></DialogContentText>
      <DialogContent>
        <TextField
          label="First Name"
          value={firstName}
          onChange={(e) => updateFirstName(e.target.value)}
          sx={{ m: "0.5rem" }}
        />
        <TextField
          label="Last Name"
          value={lastName}
          onChange={(e) => updateLastName(e.target.value)}
          sx={{ m: "0.5rem" }}
        />
        <TextField
          label="E-mail"
          value={email}
          onChange={(e) => updateEmail(e.target.value)}
          sx={{ m: "0.5rem" }}
        />
        {/* <TextField
          label="Password"
          value={password}
          onChange={(e) => updatePassword(e.target.value)}
        /> */}
        <TextField
          label="Phone"
          value={phone}
          onChange={(e) => updatePhone(e.target.value)}
          sx={{ m: "0.5rem" }}
        />
        <TextField
          label="Address 1"
          value={address1}
          onChange={(e) => updateAddress1(e.target.value)}
          sx={{ m: "0.5rem" }}
        />
        <TextField
          label="Address 2"
          value={address2}
          onChange={(e) => updateAddress2(e.target.value)}
          sx={{ m: "0.5rem" }}
        />
        <TextField
          label="City"
          value={city}
          onChange={(e) => updateCity(e.target.value)}
          sx={{ m: "0.5rem" }}
        />
        <TextField
          label="Province"
          value={province}
          onChange={(e) => updateProvince(e.target.value)}
          sx={{ m: "0.5rem" }}
        />
        <TextField
          label="Country"
          value={country}
          onChange={(e) => updateCountry(e.target.value)}
          sx={{ m: "0.5rem" }}
        />
        <TextField
          label="Postal Code"
          value={postalCode}
          onChange={(e) => updatePostalCode(e.target.value)}
          sx={{ m: "0.5rem" }}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={student}
                onChange={updateStudent}
                name="student"
              />
            }
            label="Student"
          />
          <FormControlLabel
            control={<Checkbox checked={teacher} onChange={updateTeacher} />}
            label="Teacher"
          />
          <FormControlLabel
            control={<Checkbox checked={admin} onChange={updateAdmin} />}
            label="Admin"
          />
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
