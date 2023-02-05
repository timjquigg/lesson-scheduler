const express = require("express");
const router = express.Router();
const prisma = require("../../lib/prisma");
const bcrypt = require("bcryptjs");
const { getUserByEmail, getUserbyId } = require("../../lib/user");

router.get("/", async (req, res) => {
  console.log(req.session);
  if (req.session.userId) {
    console.log(req.session.userId);
    const user = await getUserbyId(req.session.userId);
    console.log(user);
    res.send(user);
    return;
  }
  res.send();
});

router.get("/:email&:password", async (req, res) => {
  const email = req.params.email;
  const password = req.params.password;
  console.log({ email }, { password });
  // console.log(email);
  const user = await getUserByEmail(email, password);
  user.password = "";
  req.session = {
    userId: user.id,
  };
  res.send(user);
});

module.exports = router;
