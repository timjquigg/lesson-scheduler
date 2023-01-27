import { createContext, useState } from "react";
import { format, getMonth } from "date-fns";

export const dateContext = createContext();

export default function DateProvider(props) {
  const [year, setYear] = useState(format(Date.now(), "yyyy"));
  const [month, setMonth] = useState(getMonth(Date.now()));
  const [day, setDay] = useState();

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

  const providerData = {
    year,
    // setYear,
    month,
    // setMonth,
    day,
    // setDay,
    updateDate,
  };

  return (
    <dateContext.Provider value={providerData}>
      {props.children}
    </dateContext.Provider>
  );
}
