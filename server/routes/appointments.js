const express = require("express");
const {
  getLessonsByStudent,
  getAllLessons,
} = require("../../lib/appointments");
const router = express.Router();
const prisma = require("../../lib/prisma");

router.get("/", async (req, res) => {
  const appointments = await getAllLessons();
  res.status(200).send(appointments);
});

router.get("/user/:userId", async (req, res) => {
  const { userId } = req.params;
  const appointments = await getLessonsByStudent(Number(userId));
  res.status(200).send(appointments);
});

module.exports = router;
