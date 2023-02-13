import { useState } from "react";
import { Button } from "@mui/material";
import LoginForm from "./loginForm";

export default function SignInButton(props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <Button variant={props.variant} onClick={handleClick} sx={{ mx: 1 }}>
        Login
      </Button>
      <LoginForm open={open} setOpen={setOpen} />
    </>
  );
}
