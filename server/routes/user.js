const express = require("express");
const router = express.Router();
const { getUserByEmail, getUserbyId } = require("../../lib/user");

router.get("/", async (req, res) => {
  if (req.session.userId) {
    const user = await getUserbyId(req.session.userId);
    console.log(`User ${user.id} already logged in`);
    res.status(200).send(user);
    return;
  }
  console.log("no user");
  res.status(200).send();
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email, password);
  user.password = "";
  req.session = {
    userId: user.id,
  };
  console.log(`Logged in user ${user.id}`);
  res.status(200).send(user);
});

router.post("/logout", (req, res) => {
  console.log(`Logged out user ${req.session.userId}`);
  req.session = null;
  res.status(201).send();
});

module.exports = router;
