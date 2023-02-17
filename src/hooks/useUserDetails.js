import { useEffect, useState, useContext } from "react";
import isDuplicate from "../helpers/isDuplicate";
import axios from "axios";
import { usersContext } from "../providers/usersProvider";

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
  // User details:
  const [user, setUser] = useState(props ?? emptyUser);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
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

  // Error checking:
  const [duplicateEmail, setDuplicateEmail] = useState(false);
  const [duplicatePhone, setDuplicatePhone] = useState(false);
  const [noRolesSelected, setNoRolesSelected] = useState(false);

  const { users, updateUsers } = useContext(usersContext);

  useEffect(() => {
    setUser(props ?? emptyUser);
  }, [props]);

  const resetUser = () => {
    setUser(props ?? emptyUser);
    setFirstName(user.first_name);
    setLastName(user.last_name);
    setEmail(user.email);
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
    setDuplicateEmail(false);
    setDuplicatePhone(false);
    setNoRolesSelected(false);
  };

  const updateFirstName = (value) => {
    setFirstName(value);
  };
  const updateLastName = (value) => {
    setLastName(value);
  };
  const updateEmail = (value) => {
    setEmail(value);
    if (duplicateEmail) setDuplicateEmail(false);
  };
  const updatePhone = (value) => {
    setPhone(value);
    if (duplicatePhone) setDuplicatePhone(false);
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
    if (!student) setNoRolesSelected(false);
    setStudent(!student);
  };
  const updateTeacher = () => {
    if (!teacher) setNoRolesSelected(false);
    setTeacher(!teacher);
  };
  const updateAdmin = () => {
    if (!admin) setNoRolesSelected(false);
    setAdmin(!admin);
  };

  const saveUpdates = () => {
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      address_1: address1,
      address_2: address2,
      city: city,
      province: province,
      country: country,
      postal_code: postalCode.replace(" ", ""),
      student: student,
      teacher: teacher,
      admin: admin,
    };
    if (!student && !teacher && !admin) setNoRolesSelected(true);
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      address1.length === 0 ||
      city.length === 0 ||
      province.length === 0 ||
      country.length === 0 ||
      postalCode.length === 0 ||
      noRolesSelected
    ) {
      return Promise.reject();
    }
    if (phone.length === 11) {
      data.phone = phone.slice(1);
    }

    if (user.id) {
      data.id = user.id;
      return axios.post(`/user/${user.id}`, data).then((res) => {
        updateUsers(res.data);
        setUser(res.data);
      });
    }

    const duplicate = isDuplicate(data, users);

    if (duplicate.email) {
      setDuplicateEmail(true);
    }
    if (duplicate.phone) {
      setDuplicatePhone(true);
    }
    if (duplicate.email || duplicate.phone) return Promise.reject();

    return axios.post("/user/", data).then((res) => {
      updateUsers(res.data);
      setUser(res.data);
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
    duplicateEmail,
    duplicatePhone,
    noRolesSelected,
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
