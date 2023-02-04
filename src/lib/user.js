import prisma from "./prisma";

export async function getUser(email) {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  return user;
}
