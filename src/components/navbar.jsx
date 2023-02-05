import { useContext } from "react";
import { AppBar, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { userContext } from "../providers/userProvider";

export default function NavBar(props) {
  const { user, signIn, signOut } = useContext(userContext);

  const handleLogin = () => {
    signIn("alison@example.com", "password123");
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
          <Typography>{user.email}</Typography>
        </Container>
      </AppBar>
    </>
  );
}
