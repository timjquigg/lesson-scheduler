const prisma = require("./prisma");
const bcrypt = require("bcryptjs");

const getUserByEmail = async (email, password) => {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  const match = await bcrypt.compare(password, user.password);

  return match ? user : null;
};

const getUserbyId = async (id) => {
  const user = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });

  return user;
};

const getAllUsers = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      password: false,
      phone: true,
      address_1: true,
      address_2: true,
      city: true,
      province: true,
      country: true,
      postal_code: true,
      student: true,
      teacher: true,
      admin: true,
    },
  });
  return users;
};

const updateUser = async (data) => {
  const user = await prisma.user.update({
    where: { id: data.id },
    data: data,
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      password: false,
      phone: true,
      address_1: true,
      address_2: true,
      city: true,
      province: true,
      country: true,
      postal_code: true,
      student: true,
      teacher: true,
      admin: true,
    },
  });
  return user;
};

module.exports = { getUserByEmail, getUserbyId, getAllUsers, updateUser };
