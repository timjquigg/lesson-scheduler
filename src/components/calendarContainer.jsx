import { useState, useContext } from "react";
import { getMonth, format } from "date-fns";
import { Box, Paper, Typography } from "@mui/material";
import Calendar from "../components/calendar";
import { dateContext } from "@/providers/dateProvider";
import CalendarForm from "./calendarForm";
import TimeSlots from "./timeSlots";

export default function CalendarContainer(props) {
  return (
    <Paper sx={{ width: "100%", p: "1rem", mx: "auto" }}>
      <CalendarForm />
      <Box sx={{ display: "flex", flexDirection: "row", p: "1rem" }}>
        <Calendar width="75%" margin="0.5rem" />
        <TimeSlots width="25%" margin="0.5rem" />
      </Box>
    </Paper>
  );
}
