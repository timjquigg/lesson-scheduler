const { PrismaClient } = require("@prisma/client");
const { appointment } = require("../lib/prisma");

const prisma = new PrismaClient();

const students = [
  {
    first_name: "alison",
    last_name: "wonderland",
    email: "alison@example.com",
    password: "$2a$10$RRaHnkjJmfo2owJOUMs9/.3WhAlrbiv/ehXg1ttKV0.7RxIJ93e2y",
    phone: "1234567890",
    address_1: "123 fake st",
    address_2: "",
    city: "calgary",
    province: "alberta",
    country: "canada",
    postal_code: "1A2 B3C",
    student: true,
    teacher: false,
  },
  {
    first_name: "bob",
    last_name: "vila",
    email: "bob@example.com",
    password: "$2a$10$RRaHnkjJmfo2owJOUMs9/.3WhAlrbiv/ehXg1ttKV0.7RxIJ93e2y",
    phone: "2345678901",
    address_1: "123 fake st",
    address_2: "",
    city: "calgary",
    province: "alberta",
    country: "canada",
    postal_code: "1A2 B3C",
    student: true,
    teacher: false,
  },
  {
    first_name: "cindy",
    last_name: "loohoo",
    email: "cindy@example.com",
    password: "$2a$10$RRaHnkjJmfo2owJOUMs9/.3WhAlrbiv/ehXg1ttKV0.7RxIJ93e2y",
    phone: "3456789012",
    address_1: "123 fake st",
    address_2: "",
    city: "calgary",
    province: "alberta",
    country: "canada",
    postal_code: "1A2 B3C",
    student: true,
    teacher: false,
  },
];

const teachers = [
  {
    first_name: "donny",
    last_name: "darko",
    email: "donny@example.com",
    password: "$2a$10$RRaHnkjJmfo2owJOUMs9/.3WhAlrbiv/ehXg1ttKV0.7RxIJ93e2y",
    phone: "4567890123",
    address_1: "123 fake st",
    address_2: "",
    city: "calgary",
    province: "alberta",
    country: "canada",
    postal_code: "1A2 B3C",
    student: false,
    teacher: true,
  },
];

const admins = [
  {
    first_name: "Tim",
    last_name: "Quigg",
    email: "timjquigg@gmail.com",
    password: "$2a$10$RRaHnkjJmfo2owJOUMs9/.3WhAlrbiv/ehXg1ttKV0.7RxIJ93e2y",
    phone: "4036607967",
    address_1: "139 copperfield gardens se",
    address_2: "",
    city: "calgary",
    province: "alberta",
    country: "canada",
    postal_code: "T2Z 4C2",
    admin: true,
  },
];

const today = new Date();
today.setHours(14);
const hour = 3600000;
const day = 24 * hour;

const appointments = [
  {
    studentId: 1,
    teacherId: 4,
    start: new Date(today.valueOf() + day),
    end: new Date(today.valueOf() + day + hour),
  },
  {
    studentId: 1,
    teacherId: 4,
    start: new Date(today.valueOf() + 2 * day),
    end: new Date(today.valueOf() + 2 * day + hour),
  },
  {
    studentId: 1,
    teacherId: 4,
    start: new Date(today.valueOf() + 7 * day),
    end: new Date(today.valueOf() + 7 * day + hour),
  },
  {
    studentId: 1,
    teacherId: 4,
    start: new Date(today.valueOf() + 14 * day),
    end: new Date(today.valueOf() + 14 * day + hour),
  },
];

async function main() {
  for (const student of students) {
    const user = await prisma.User.create({
      data: student,
    });
    console.log(`Created student user with id: ${user.id}`);
  }
  for (const teacher of teachers) {
    const user = await prisma.User.create({
      data: teacher,
    });
    console.log(`Created teacher user with id: ${user.id}`);
  }
  for (const appointment of appointments) {
    const instance = await prisma.Appointment.create({
      data: appointment,
    });
    console.log(`Created appointment with id: ${instance.id}`);
  }
  for (const admin of admins) {
    const user = await prisma.User.create({
      data: admin,
    });
    console.log(`Created admin user with id: ${user.id}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
