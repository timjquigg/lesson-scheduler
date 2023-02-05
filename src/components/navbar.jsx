import { useContext } from "react";
import { AppBar, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { userContext } from "../providers/userProvider";

export default function NavBar(props) {
  const { user, signIn } = useContext(userContext);

  const handleClick = () => {
    signIn("alison@example.com", "password123");
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Button variant="contained" onClick={handleClick}>
            Login
          </Button>
          <Typography>{user.email}</Typography>
        </Container>
      </AppBar>
    </>
  );
}
