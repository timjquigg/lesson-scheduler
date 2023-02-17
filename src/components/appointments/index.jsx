import { format, parseISO } from "date-fns";
import {
  Card,
  Typography,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
} from "@mui/material";
import { useContext } from "react";
import { userContext } from "../../providers/userProvider";
import useAppointments from "../../hooks/useAppointments";

export default function Appointments(props) {
  const { user } = useContext(userContext);
  const appointments = useAppointments(user);

  const appointmentList = appointments.map((appointment, index) => {
    const parsedStart = parseISO(appointment.start);
    const parsedEnd = parseISO(appointment.end);
    return (
      <TableRow key={index}>
        <TableCell>{format(parsedStart, "P")}</TableCell>
        <TableCell>
          {format(parsedStart, "hh")}
          {":"}
          {format(parsedStart, "mm")} {format(parsedStart, "a")}
        </TableCell>
        <TableCell>
          {format(parsedEnd, "hh")}
          {":"}
          {format(parsedEnd, "mm")} {format(parsedEnd, "a")}
        </TableCell>
        <TableCell>
          {appointment.teacher.first_name} {appointment.teacher.last_name}
        </TableCell>
      </TableRow>
    );
  });

  return (
    <Card sx={{ m: 2 }}>
      <Typography variant="h4">Upcoming Lessons</Typography>
      <TableContainer component={Box}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Start Time</TableCell>
              <TableCell>End Time</TableCell>
              <TableCell>Teacher</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
          {appointmentList}
        </Table>
      </TableContainer>
    </Card>
  );
}
