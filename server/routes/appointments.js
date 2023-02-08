const express = require("express");
const { getLessonsByStudent } = require("../../lib/appointments");
const router = express.Router();
const prisma = require("../../lib/prisma");

router.get("/user/:userId/", async (req, res) => {
  const { userId } = req.query;
  const appointments = await getLessonsByStudent(userId);
  res.status(200).send(appointments);
});

module.exports = router;
