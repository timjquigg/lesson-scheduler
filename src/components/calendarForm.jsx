import { useContext } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
} from "@mui/material";
import format from "date-fns/format";
import { dateContext } from "../providers/dateProvider";

export default function CalendarForm(props) {
  // const { year, setYear, month, setMonth } = useContext(dateContext);
  const { year, month, updateDate } = useContext(dateContext);
  const date = new Date(year, month);
  const prettyMonth = format(date, "LLLL");

  const prettyMonths = Array.from(Array(12)).map((el, index) => {
    return (
      <MenuItem value={index} key={index}>
        {format(new Date(year, index), "LLLL")}
      </MenuItem>
    );
  });

  const years = Array.from(Array(10)).map((el, index) => {
    return (
      <MenuItem value={2023 + index} key={index}>
        {2023 + index}
      </MenuItem>
    );
  });

  const handleMonthChange = (event) => {
    updateDate({ month: event.target.value });
  };

  const handleYearChange = (event) => {
    updateDate({ year: event.target.value });
  };

  return (
    // <FormGroup sx={{ width: "50%" }}>
    <FormGroup
      sx={{
        // width: 1 / 4,
        mx: "auto",
        my: "2rem",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
      }}
    >
      <FormControl sx={{ m: "0.5rem" }}>
        <InputLabel>Year</InputLabel>
        <Select value={year} label="Year" onChange={handleYearChange}>
          {years}
        </Select>
      </FormControl>
      <FormControl sx={{ m: "0.5rem" }}>
        <InputLabel>Month</InputLabel>
        <Select value={month} label="Month" onChange={handleMonthChange}>
          {prettyMonths}
        </Select>
      </FormControl>
    </FormGroup>
  );
}
