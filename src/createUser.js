import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function createUser() {
  const user = {
    nome: "Felipe",
    peso: 107.5,
    idade: 21,
    altura: 175,
    tmb: 0,
  };
  await prisma.user.create({
    data: user,
  });
}
