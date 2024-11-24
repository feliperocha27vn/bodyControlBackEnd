import express from "express";
import { PrismaClient } from "@prisma/client";
import User from "./User.js";

const app = express();
const prisma = new PrismaClient();
const port = 3333;

app.use(express.json());

app.get("/users", async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.send(allUsers);
});

app.post("/register", (req, res) => {
  const { nome, peso, idade, altura, genero } = req.body;
  const userData = { nome, peso, idade, altura, genero };

  for (const key in userData) {
    if (!userData[key]) {
      res.writeHead(400).end(`O campo ${key.toUpperCase()} é obrigatório!`)
    }
  }
  const newUser = new User(nome, peso, idade, altura, genero);
  newUser.createUser();
  res.writeHead(201).end();
});

app.listen(port, () => {
  console.log(`Server rodando no endereço localhost:${port}`);
});
