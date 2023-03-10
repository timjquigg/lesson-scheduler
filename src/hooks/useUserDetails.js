import { useEffect, useState, useContext, useCallback } from "react";
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

  // Error checking state variables:
  const [duplicateEmail, setDuplicateEmail] = useState(false);
  const [duplicatePhone, setDuplicatePhone] = useState(false);
  const [noRolesSelected, setNoRolesSelected] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  // List of all users
  const { users, updateUsers } = useContext(usersContext);

  const resetUser = useCallback(() => {
    // setUser(props ?? emptyUser);
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
    setInvalidEmail(false);
  }, [user]);

  useEffect(() => {
    setUser(props ?? emptyUser);
  }, [props]);

  useEffect(() => {
    resetUser();
  }, [user, resetUser]);

  const updateFirstName = (value) => {
    setFirstName(value);
  };
  const updateLastName = (value) => {
    setLastName(value);
  };
  const updateEmail = (value) => {
    setEmail(value);
    if (invalidEmail) setInvalidEmail(false);
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

  const cleanPhone = (phone) => {
    if (phone.length === 11) {
      return phone.slice(1);
    }
    return phone;
  };

  const cleanPostalCode = (postalCode) => {
    return postalCode.replace(" ", "");
  };

  const validateData = (data) => {
    // Data validation:

    // User must have a role
    if (!student && !teacher && !admin) setNoRolesSelected(true);

    // Check to make sure e-mail and phone # are unique
    const duplicate = isDuplicate(data, users);

    if (duplicate.email) setDuplicateEmail(true);
    if (duplicate.phone) setDuplicatePhone(true);

    // Confirm e-mail address is valid format:
    let hasInvalidEmail = false;
    if (
      !/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(
        email
      )
    ) {
      hasInvalidEmail = true;
      setInvalidEmail(true);
    }

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
      (!student && !teacher && !admin) ||
      duplicate.email ||
      duplicate.phone ||
      hasInvalidEmail
    ) {
      return false;
    }
    return true;
  };

  const saveUpdates = () => {
    // Compile individual fields into new data object
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: cleanPhone(phone),
      address_1: address1,
      address_2: address2,
      city: city,
      province: province,
      country: country,
      postal_code: cleanPostalCode(postalCode),
      student: student,
      teacher: teacher,
      admin: admin,
    };

    if (user.id) data.id = user.id;
    // Data validation:
    if (validateData(data)) {
      // If validation passes and user exists, update user
      if (user.id) {
        data.id = user.id;
        return axios.post(`/user/${user.id}`, data).then((res) => {
          setUser(res.data);
          updateUsers(res.data);
        });
      }

      // If new user, create
      return axios.post("/user/", data).then((res) => {
        updateUsers(res.data);
        setUser(res.data);
      });
    } else {
      return Promise.reject();
    }
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
    invalidEmail,
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
