import { PrismaClient } from "@prisma/client";
import createUser from "./createUser.js";

const prisma = new PrismaClient();

async function main() {
  const allUsers = await prisma.user.findMany();

//   createUser();

  console.log(allUsers);
}

main();
