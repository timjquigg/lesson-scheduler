const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const students = [
  {
    first_name: "alison",
    last_name: "wonderland",
    email: "alison@example.com",
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

async function main() {
  for (const student of students) {
    const user = await prisma.User.create({
      data: student,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  for (const teacher of teachers) {
    const user = await prisma.User.create({
      data: teacher,
    });
    console.log(`Created user with id: ${user.id}`);
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
