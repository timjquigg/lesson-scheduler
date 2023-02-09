import { useContext } from "react";
import { userContext } from "../providers/userProvider";
import { Button } from "@mui/material";

export default function SignInButton(props) {
  const { user, signIn, signOut } = useContext(userContext);

  const handleLogin = () => {
    signIn("alison@example.com", "password123");
  };

  return (
    <Button variant={props.variant} onClick={handleLogin} sx={{ mx: 1 }}>
      Login
    </Button>
  );
}
