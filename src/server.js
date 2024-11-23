import express from "express";
import { PrismaClient } from "@prisma/client";
import User from "./User.js";

const app = express();
const prisma = new PrismaClient();
const port = 3333;

app.get("/users", async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.send(allUsers);
});

app.post("/users", (req, res) => {
  const novoUser = new User();
  novoUser.createUser();
  res.send("O novo usuário foi criado com sucesso!");
});

app.listen(port, () => {
  console.log(`Server rodando no endereço localhost:${port}`);
});
