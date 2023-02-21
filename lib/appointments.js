const prisma = require("./prisma");

const getAllLessons = async () => {
  const appointments = await prisma.appointment.findMany({
    where: {
      start: {
        gte: new Date(),
      },
    },
    select: {
      id: true,
      student: {
        select: {
          first_name: true,
          last_name: true,
        },
      },
      teacher: {
        select: {
          first_name: true,
          last_name: true,
        },
      },
      start: true,
      end: true,
    },
  });
  return appointments;
};

const getLessonsByStudent = async (userId) => {
  const appointments = await prisma.appointment.findMany({
    where: {
      studentId: userId,
      start: {
        gte: new Date(),
      },
    },
    select: {
      id: true,
      teacher: {
        select: {
          first_name: true,
          last_name: true,
        },
      },
      start: true,
      end: true,
    },
    take: 5,
  });
  return appointments;
};

module.exports = { getAllLessons, getLessonsByStudent };
