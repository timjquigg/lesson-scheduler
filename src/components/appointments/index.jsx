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
  Tooltip,
  IconButton,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useContext } from "react";
import { userContext } from "../../providers/userProvider";
import useAppointments from "../../hooks/useAppointments";

export default function Appointments(props) {
  const { user } = useContext(userContext);
  const { admin } = props;
  const appointments = useAppointments({ user, admin });

  const handleEditClick = () => {};

  let appointmentsList = [];
  console.log(appointments);
  if (appointments.length > 0) {
    appointmentsList = appointments.map((appointment, index) => {
      const parsedStart = parseISO(appointment.start);
      const parsedEnd = parseISO(appointment.end);
      return (
        <TableRow key={index}>
          {admin && (
            <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}>
              {appointment.student.first_name} {appointment.student.last_name}
            </TableCell>
          )}
          <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}>
            {format(parsedStart, "P")}
          </TableCell>
          <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}>
            {format(parsedStart, "hh")}
            {":"}
            {format(parsedStart, "mm")} {format(parsedStart, "a")}
          </TableCell>
          <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}>
            {format(parsedEnd, "hh")}
            {":"}
            {format(parsedEnd, "mm")} {format(parsedEnd, "a")}
          </TableCell>
          <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}>
            {appointment.teacher.first_name} {appointment.teacher.last_name}
          </TableCell>
          <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}>
            <Tooltip title="Edit">
              <IconButton
                color="primary"
                onClick={(event) => handleEditClick(event)}
              >
                <Edit />
              </IconButton>
            </Tooltip>
          </TableCell>
        </TableRow>
      );
    });
  }

  return (
    <Card sx={{ m: 2 }}>
      <Typography variant="h4">Upcoming Lessons</Typography>
      <TableContainer component={Box}>
        <Table>
          <TableHead>
            <TableRow>
              {admin && (
                <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}>
                  Student
                </TableCell>
              )}
              <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}>
                Date
              </TableCell>
              <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}>
                Start Time
              </TableCell>
              <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}>
                End Time
              </TableCell>
              <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}>
                Teacher
              </TableCell>
              <TableCell align="center" sx={{ mx: 0.5, px: 0.5 }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
          {appointmentsList}
        </Table>
      </TableContainer>
    </Card>
  );
}
