import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
  Checkbox,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import useUserDetails from "../hooks/useUserDetails";
// import { usersContext } from "../providers/usersProvider";

export default function UserDetailsForm(props) {
  const open = props.open;
  const setOpen = props.setOpen;
  const [showErrors, setShowErrors] = useState(false);

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
    duplicateEmail,
    duplicatePhone,
    noRolesSelected,
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
    setShowErrors(false);
    resetUser();
  };

  const handleSave = () => {
    saveUpdates()
      .then(() => {
        setOpen(false);
      })
      .catch(() => {
        setShowErrors(true);
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
          error={showErrors && firstName.length === 0}
          helperText={
            (showErrors &&
              firstName.length === 0 &&
              "First Name cannot be empty") ||
            " "
          }
          sx={{ m: "0.25rem", minWidth: "150px" }}
        />
        <TextField
          label="Last Name"
          value={lastName}
          onChange={(e) => updateLastName(e.target.value)}
          error={showErrors && lastName.length === 0}
          helperText={
            (showErrors &&
              lastName.length === 0 &&
              "Last Name cannot be empty") ||
            " "
          }
          sx={{ m: "0.25rem", minWidth: "150px" }}
        />
        <TextField
          label="E-mail"
          value={email}
          onChange={(e) => updateEmail(e.target.value)}
          error={duplicateEmail || (showErrors && email.length === 0)}
          helperText={
            (duplicateEmail && "E-mail exists") ||
            (showErrors && email.length === 0 && "E-mail cannot be blank") ||
            " "
          }
          sx={{ m: "0.25rem", minWidth: "250px" }}
        />
        <TextField
          label="Phone"
          value={phone}
          onChange={(e) => updatePhone(e.target.value)}
          error={duplicatePhone || (showErrors && phone.length === 0)}
          helperText={
            (duplicatePhone && "Phone exists") ||
            (showErrors && phone.length === 0 && "Phone cannot be blank") ||
            " "
          }
          sx={{ m: "0.25rem" }}
        />
        <TextField
          label="Address 1"
          value={address1}
          onChange={(e) => updateAddress1(e.target.value)}
          error={showErrors && address1.length === 0}
          helperText={
            (showErrors &&
              address1.length === 0 &&
              "Address cannot be empty") ||
            " "
          }
          sx={{ m: "0.25rem", minWidth: "250px" }}
        />
        <TextField
          label="Address 2"
          value={address2}
          onChange={(e) => updateAddress2(e.target.value)}
          helperText=" "
          sx={{ m: "0.25rem", minWidth: "250px" }}
        />
        <TextField
          label="City"
          value={city}
          onChange={(e) => updateCity(e.target.value)}
          error={showErrors && city.length === 0}
          helperText={
            (showErrors && city.length === 0 && "City cannot be blank") || " "
          }
          sx={{ m: "0.25rem" }}
        />

        <TextField
          label="Province"
          value={province}
          onChange={(e) => updateProvince(e.target.value)}
          error={showErrors && province.length === 0}
          helperText={
            (showErrors &&
              province.length === 0 &&
              "Province cannot be blank") ||
            " "
          }
          sx={{ m: "0.25rem" }}
        />
        <TextField
          label="Country"
          value={country}
          onChange={(e) => updateCountry(e.target.value)}
          error={showErrors && country.length === 0}
          helperText={
            (showErrors && country.length === 0 && "Country cannot be blank") ||
            " "
          }
          sx={{ m: "0.25rem" }}
        />
        <TextField
          label="Postal Code"
          value={postalCode}
          onChange={(e) => updatePostalCode(e.target.value)}
          error={showErrors && postalCode.length === 0}
          helperText={
            (showErrors &&
              postalCode.length === 0 &&
              "Post Code cannot be blank") ||
            " "
          }
          sx={{ m: "0.25rem" }}
        />
        <FormControl error={noRolesSelected}>
          <FormLabel component="legend">Assign User Roles</FormLabel>
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
          <FormHelperText>Please choose at least one role</FormHelperText>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
