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

module.exports = { getUserByEmail, getUserbyId };
