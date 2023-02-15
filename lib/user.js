const prisma = require("./prisma");
const bcrypt = require("bcryptjs");
const { generatePassword } = require("./generatePassword");
const { sendEmail } = require("./mailer");

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

const createUser = async (user) => {
  const password = generatePassword();
  const hash = await bcrypt.hash(password, 10);
  // console.log(password);
  // console.log(hash);
  sendEmail(user.email, password);
  user.password = hash;
  // console.log(user);
  const newUser = await prisma.User.create({
    data: user,
  });
  return newUser;
};

module.exports = {
  getUserByEmail,
  getUserbyId,
  getAllUsers,
  updateUser,
  createUser,
};
