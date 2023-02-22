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
} from "@mui/material";
import Row from "./row";
import { useContext } from "react";
import { userContext } from "../../providers/userProvider";
import useAppointments from "../../hooks/useAppointments";

export default function Appointments(props) {
  const { user } = useContext(userContext);
  const { admin } = props;
  const { appointments, cancelAppointmentStudent } = useAppointments({
    user,
    admin,
  });

  let appointmentsList = [];
  if (appointments.length > 0) {
    appointmentsList = appointments.map((appointment, index) => {
      return (
        <Row
          key={index}
          index={index}
          appointment={appointment}
          admin={admin}
          remove={cancelAppointmentStudent}
        />
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
          <TableBody>{appointmentsList}</TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
