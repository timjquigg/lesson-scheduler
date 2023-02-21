import { useEffect, useState } from "react";
import axios from "axios";

export default function useAppointments(props) {
  const [appointments, setAppointments] = useState([]);
  const { user, admin } = props;
  console.log(`admin in useAppointments: ${admin}`);

  useEffect(() => {
    if (admin) {
      getAllAppointmnets();
      return;
    }
    if (user.hasOwnProperty("id")) {
      getUserAppointments(user);
    }
  }, [admin, user]);

  const getUserAppointments = (user) => {
    axios.get(`/appointments/user/${user.id}`).then((res) => {
      setAppointments(res.data);
    });
  };

  const getAllAppointmnets = () => {
    axios.get("/appointments").then((res) => {
      setAppointments(res.data);
    });
  };

  return appointments;
}
