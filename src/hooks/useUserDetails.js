import { useState } from "react";
import useUsers from "./useUsers";
import axios from "axios";

const emptyUser = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  phone: "",
  address_1: "",
  address_2: "",
  city: "",
  province: "",
  country: "",
  postal_code: "",
  student: true,
  teacher: false,
  admin: false,
};

export default function useUserDetails(props) {
  const [user, setUser] = useState(props ?? emptyUser);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  // const [password, setPassword] = useState(user.password);
  const [phone, setPhone] = useState(user.phone);
  const [address1, setAddress1] = useState(user.address_1);
  const [address2, setAddress2] = useState(user.address_2);
  const [city, setCity] = useState(user.city);
  const [province, setProvince] = useState(user.province);
  const [country, setCountry] = useState(user.country);
  const [postalCode, setPostalCode] = useState(user.postal_code);
  const [student, setStudent] = useState(user.student);
  const [teacher, setTeacher] = useState(user.teacher);
  const [admin, setAdmin] = useState(user.admin);

  const { updateUsers } = useUsers();

  const resetUser = () => {
    setUser(props ?? emptyUser);
    setFirstName(user.first_name);
    setLastName(user.last_name);
    setEmail(user.email);
    // setPassword(user.password);
    setPhone(user.phone);
    setAddress1(user.address_1);
    setAddress2(user.address_2);
    setCity(user.city);
    setProvince(user.province);
    setCountry(user.country);
    setPostalCode(user.postal_code);
    setStudent(user.student);
    setTeacher(user.teacher);
    setAdmin(user.admin);
  };

  const updateFirstName = (value) => {
    setFirstName(value);
  };
  const updateLastName = (value) => {
    setLastName(value);
  };
  const updateEmail = (value) => {
    setEmail(value);
  };
  // const updatePassword = (value) => {
  //   setPassword(value);
  // };
  const updatePhone = (value) => {
    setPhone(value);
  };
  const updateAddress1 = (value) => {
    setAddress1(value);
  };
  const updateAddress2 = (value) => {
    setAddress2(value);
  };
  const updateCity = (value) => {
    setCity(value);
  };
  const updateProvince = (value) => {
    setProvince(value);
  };
  const updateCountry = (value) => {
    setCountry(value);
  };
  const updatePostalCode = (value) => {
    setPostalCode(value);
  };
  const updateStudent = () => {
    setStudent(!student);
  };
  const updateTeacher = () => {
    setTeacher(!teacher);
  };
  const updateAdmin = () => {
    setAdmin(!admin);
  };

  const saveUpdates = () => {
    const data = {
      id: user.id,
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      address_1: address1,
      address_2: address2,
      city: city,
      province: province,
      country: country,
      postal_code: postalCode,
      student: student,
      teacher: teacher,
      admin: admin,
    };
    return axios.post(`/user/${user.id}`, data).then((res) => {
      console.log(res.data);
      setUser((prev) => res.data);
      // updateUsers(res.data);
    });
  };

  return {
    user,
    firstName,
    lastName,
    email,
    phone,
    address1,
    address2,
    city,
    province,
    country,
    postalCode,
    student,
    teacher,
    admin,
    resetUser,
    updateFirstName,
    updateLastName,
    updateEmail,
    updatePhone,
    updateAddress1,
    updateAddress2,
    updateCity,
    updateProvince,
    updateCountry,
    updatePostalCode,
    updateStudent,
    updateTeacher,
    updateAdmin,
    saveUpdates,
  };
}
