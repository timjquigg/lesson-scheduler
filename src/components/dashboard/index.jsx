import { useContext } from "react";
import { userContext } from "../../providers/userProvider";
import StudentDashboard from "./studentDashboard";
import TeacherDashboard from "./teacherDashboard";
import AdminDashboard from "./adminDashboard";

export default function Dashboard(props) {
  const { user } = useContext(userContext);

  return (
    <>
      {user.student && <StudentDashboard />}
      {user.teacher && <TeacherDashboard />}
      {user.admin && <AdminDashboard />}
    </>
  );
}
