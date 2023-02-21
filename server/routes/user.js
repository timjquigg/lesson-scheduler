const express = require("express");
const { user } = require("../../lib/prisma");
const router = express.Router();
const {
  getUserByEmail,
  getUserbyId,
  getAllUsers,
  updateUser,
  createUser,
} = require("../../lib/user");

router.get("/", async (req, res) => {
  const users = await getAllUsers();
  res.status(200).send(users);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // If the user has a session cookie
  if (req.session.userId) {
    const user = await getUserbyId(req.session.userId);
    // console.log(`User ${user.id} already logged in`);
    console.log(req.session.userId);
    res.status(200).send(user);
    return;
  }

  // If the request includes an email & password
  if (email && password) {
    const user = await getUserByEmail(email, password);
    user.password = "";
    req.session = {
      userId: user.id,
      admin: user.admin,
    };
    console.log(`Logged in user ${user.id}`);
    res.status(200).send(user);
    return;
  }

  // No cookie & no email/password
  console.log("no user");
  res.status(200).send();
});

router.post("/logout", (req, res) => {
  console.log(`Logged out user ${req.session.userId}`);
  req.session = null;
  res.status(201).send();
});

router.post("/:id", async (req, res) => {
  console.log(req.params.id);
  if (req.session.admin || req.params.id === req.session.id) {
    const user = await updateUser(req.body);
    res.status(200).send(user);
    return;
  }
  res.status(401).send();
  return;
});

router.post("/", async (req, res) => {
  if (req.session.admin) {
    const newUser = await createUser(req.body);
    newUser.password = "";
    res.status(201).send(newUser);
    return;
  }
  res.status(401).send();
  return;
});

module.exports = router;
