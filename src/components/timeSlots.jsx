import { useContext } from "react";
import { dateContext } from "@/providers/dateProvider";
import { Stack } from "@mui/system";
import { Box, Button, Paper } from "@mui/material";

export default function TimeSlots(props) {
  const { width, margin } = props;
  const { timeSlots, updateTimeSlots } = useContext(dateContext);

  const timeSlotList = Object.keys(timeSlots).map((el, index) => {
    return (
      <Button
        key={index}
        variant={timeSlots[el].available ? "contained" : "disabled"}
      >
        {timeSlots[el].start} - {timeSlots[el].end}
      </Button>
    );
  });
  return (
    <Box sx={{ width: { width }, m: { margin } }}>
      <Stack spacing={2}>{timeSlotList}</Stack>
    </Box>
  );
}
