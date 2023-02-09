import { useContext } from "react";
import { AppBar, Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { userContext } from "../providers/userProvider";
import SignInButton from "./signInButton";

export default function NavBar(props) {
  const { user, signOut } = useContext(userContext);

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
        {!user.email && <SignInButton variant="string" />}
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
      </AppBar>
    </Box>
  );
}
