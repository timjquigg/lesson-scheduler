const prisma = require("./prisma");

const getAllLessons = async () => {
  const appointments = await prisma.appointment.findMany({
    where: {
      start: {
        gte: new Date(),
      },
      teacher: {
        isNot: undefined,
      },
      student: {
        isNot: undefined,
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
      notes: true,
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

const deleteAppointment = async (id) => {
  const deleted = await prisma.appointment.delete({
    where: {
      id: id,
    },
  });
  return deleted;
};

const cancelAppointmentStudent = async (id) => {
  // const appointment = await prisma.appointment.update({
  //   where: {
  //     id: id,
  //   },
  //   data: {
  //     studentId: null,
  //   },
  // });
  // return appointment;
  return;
};

module.exports = {
  getAllLessons,
  getLessonsByStudent,
  deleteAppointment,
  cancelAppointmentStudent,
};
