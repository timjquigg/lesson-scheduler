const prisma = require("./prisma");

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

module.exports = { getLessonsByStudent };
