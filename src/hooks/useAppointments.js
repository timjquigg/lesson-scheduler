import { useEffect, useState } from "react";
import axios from "axios";

export default function useAppointments(props) {
  const [appointments, setAppointments] = useState([]);
  const { user, admin } = props;

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

  const deleteAppointment = (id) => {
    axios.delete(`/appointments/${id}`).then((res) => {
      console.log(res.data);
    });
  };

  const cancelAppointmentStudent = (id) => {
    axios.put(`/appointments/${id}`).then((res) => {
      setAppointments((prev) => {
        const newAppointments = [...prev];
        const index = newAppointments.findIndex((app) => app.id === id);
        newAppointments.splice(index, 1);
        return newAppointments;
      });
    });
  };

  return { appointments, deleteAppointment, cancelAppointmentStudent };
}
