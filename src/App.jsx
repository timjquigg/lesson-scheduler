import { Button, Paper, Typography } from "@mui/material";
import Scheduler from "./components/scheduler";
import Dashboard from "./components/dashboard";
import { Box, Container } from "@mui/system";
import DateProvider from "./providers/dateProvider";
import NavBar from "./components/navbar";
import { userContext } from "./providers/userProvider";
import { useContext } from "react";
import SignInButton from "./components/signInButton";

export default function Home() {
  const { user } = useContext(userContext);

  return (
    <>
      <head>
        <title>Lesson Scheduler</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <main>
        <DateProvider>
          {/* <UserProvider> */}
          <Paper
            sx={{
              height: "100vh",
              maxWidth: "1080px",
              mx: "auto",
              textAlign: "center",
            }}
          >
            <NavBar />
            <Box sx={{ my: 2 }}>
              {/* <Scheduler /> */}
              {user.hasOwnProperty("id") ? (
                <Dashboard />
              ) : (
                <SignInButton variant="contained" />
              )}
            </Box>
          </Paper>
          {/* </UserProvider> */}
        </DateProvider>
      </main>
    </>
  );
}
