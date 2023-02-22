import { useState } from "react";
import { TableRow, TableCell, Tooltip, IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { format, parseISO } from "date-fns";
import EditNotes from "../scheduler/editNotes";

export default function Row(props) {
  const [open, setOpen] = useState(false);
  const { appointment, admin, remove, index } = props;

  const parsedStart = parseISO(appointment.start);
  const parsedEnd = parseISO(appointment.end);

  const handleEditClick = () => {
    setOpen(true);
  };

  return (
    <TableRow>
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
        <EditNotes
          open={open}
          setOpen={setOpen}
          appointment={appointment}
          remove={remove}
        />
      </TableCell>
    </TableRow>
  );
}
