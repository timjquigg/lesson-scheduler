const express = require("express");
const {
  getLessonsByStudent,
  getAllLessons,
  cancelAppointmentStudent,
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

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  cancelAppointmentStudent(Number(id));
  res.status(200).send();
});
module.exports = router;
