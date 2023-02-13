import { useEffect, useState } from "react";
import axios from "axios";

export default function useAppointments(user) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (user.hasOwnProperty("id")) {
      axios.get(`/appointments/user/${user.id}`).then((res) => {
        setAppointments(res.data);
      });
    }
  }, [user]);
  console.log({ appointments });
  return appointments;
}
