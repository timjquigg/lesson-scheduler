const express = require("express");
const router = express.Router();
const { getUserByEmail, getUserbyId } = require("../../lib/user");

router.get("/", async (req, res) => {
  if (req.session.userId) {
    const user = await getUserbyId(req.session.userId);
    res.status(200).send(user);
    return;
  }
  console.log("no user");
  res.status(200).send();
});

router.get("/:email&:password", async (req, res) => {
  const email = req.params.email;
  const password = req.params.password;
  const user = await getUserByEmail(email, password);
  user.password = "";
  req.session = {
    userId: user.id,
  };
  res.status(200).send(user);
});

router.post("/:email", (req, res) => {
  req.session = null;
  res.status(201).send();
});

module.exports = router;
