import { useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { userContext } from "../providers/userProvider";

export default function LoginForm(props) {
  const { open, setOpen } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(userContext);

  const handleClose = () => {
    setOpen(false);
    setEmail("");
    setPassword("");
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSubmit = () => {
    signIn(email, password);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter your e-mail and password to login.
        </DialogContentText>
        <TextField
          autoFocus
          helperText="Please enter your e-mail"
          label="Email"
          name="email"
          value={email}
          onChange={(event) => handleEmailChange(event.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit();
            }
          }}
          placeholder="Email"
          type="email"
          variant="standard"
          sx={{ m: 1 }}
        />
        <TextField
          helperText="Please enter your password"
          label="password"
          name="password"
          value={password}
          onChange={(event) => handlePasswordChange(event.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit();
            }
          }}
          placeholder="Password"
          type="password"
          variant="standard"
          sx={{ m: 1 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
