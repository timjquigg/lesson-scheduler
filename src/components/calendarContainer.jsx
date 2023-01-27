import { useState, useContext } from "react";
import { getMonth, format } from "date-fns";
import { Box, Paper, Typography } from "@mui/material";
import Calendar from "../components/calendar";
import { dateContext } from "@/providers/dateProvider";
import CalendarForm from "./calendarForm";

export default function CalendarContainer(props) {
  return (
    <Paper sx={{ width: 2 / 3, p: "1rem", mx: "auto" }}>
      <CalendarForm />
      <Calendar />
    </Paper>
  );
}
