import { useContext } from "react";
import { AppBar, Box, Button, Typography } from "@mui/material";
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        {/* <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "row" }}> */}
        {!user.email && (
          <Button variant="string" onClick={handleLogin} sx={{ mx: 1 }}>
            Login
          </Button>
        )}
        {user.email && (
          <>
            <Typography sx={{ mx: 2, my: "auto" }}>
              Welcom {user.first_name}
            </Typography>
            <Button variant="string" onClick={handleLogout} sx={{ mx: 1 }}>
              Logout
            </Button>
          </>
        )}
        {/* </Container> */}
      </AppBar>
    </Box>
  );
}
