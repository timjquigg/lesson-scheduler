import { createContext, useState } from "react";
import { format, getMonth } from "date-fns";

const tempTimeSlots = {
  1: {
    start: 8,
    end: 9,
    available: true,
  },
  2: {
    start: 9,
    end: 10,
    available: true,
  },
  3: {
    start: 10,
    end: 11,
    available: true,
  },
};

export const dateContext = createContext();

export default function DateProvider(props) {
  const [year, setYear] = useState(format(Date.now(), "yyyy"));
  const [month, setMonth] = useState(getMonth(Date.now()));
  const [day, setDay] = useState();
  const [timeSlots, setTimeSlots] = useState(tempTimeSlots);

  const updateDate = (newDate) => {
    if (newDate.month !== undefined) {
      console.log(newDate.month);
      setMonth(newDate.month);
    }
    if (newDate.year !== undefined) {
      setYear(newDate.year);
    }
    if (newDate.day !== undefined) {
      setDay(newDate.day);
    }
  };

  const updateTimeSlots = (newData) => {
    setTimeSlots((prev) => {
      const newTimeSlots = { ...prev };

      newTimeSlots[newData.id] = newData;

      return newTimeSlots;
    });
  };

  const providerData = {
    year,
    month,
    day,
    timeSlots,
    updateDate,
    updateTimeSlots,
  };

  return (
    <dateContext.Provider value={providerData}>
      {props.children}
    </dateContext.Provider>
  );
}
