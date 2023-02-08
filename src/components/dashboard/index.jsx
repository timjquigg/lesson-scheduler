import { useContext } from "react";
import { userContext } from "../../providers/userProvider";
import StudentDashboard from "./studentDashboard";
import TeacherDashboard from "./teacherDashboard";
import AdminDashboard from "./adminDashboard";

export default function Dashboard(props) {
  const { user } = useContext(userContext);
  if (user.student) {
    return <StudentDashboard />;
  }
  if (user.teacher) {
    return <TeacherDashboard />;
  }
  if (user.admin) {
    return <AdminDashboard />;
  }
  return <></>;
}
