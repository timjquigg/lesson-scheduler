import { useContext } from "react";
import {
  Box,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  getDaysInMonth,
  startOfMonth,
  format,
  getDay,
  getWeeksInMonth,
} from "date-fns";
import StyledTableCell from "./styledTableCell";
import { dateContext } from "../providers/dateProvider";

export default function Calendar(props) {
  const { width, margin } = props;
  const { year, month } = useContext(dateContext);

  const date = new Date(year, month);
  const daysInMonth = getDaysInMonth(date);
  const firstOfMonth = getDay(date);
  const weeksInMonth = getWeeksInMonth(date);
  const calendar = [];
  for (let i = 0; i < weeksInMonth; i++) {
    calendar.push(Array.from(Array(7)));
  }

  let week = 0;
  let day = firstOfMonth;
  for (let i = 1; i <= daysInMonth; i++) {
    calendar[week][day] = i;
    day++;
    if (day === 7) {
      week++;
      day -= 7;
    }
  }

  const calendarComponents = calendar.map((el, index) => {
    return (
      <TableRow key={index}>
        {el.map((day, index) => {
          return (
            <StyledTableCell variant="body" key={index}>
              {day}
            </StyledTableCell>
          );
        })}
      </TableRow>
    );
  });

  return (
    <Box sx={{ width: { width }, m: { margin } }}>
      <TableContainer
        component={Box}
        sx={{ border: 1, borderRadius: 3, maxWidth: "100%" }}
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell variant="head">Sunday</StyledTableCell>
              <StyledTableCell variant="head">Monday</StyledTableCell>
              <StyledTableCell variant="head">Tuesday</StyledTableCell>
              <StyledTableCell variant="head">Wednesday</StyledTableCell>
              <StyledTableCell variant="head">Thursday</StyledTableCell>
              <StyledTableCell variant="head">Friday</StyledTableCell>
              <StyledTableCell variant="head">Saturday</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{calendarComponents}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
