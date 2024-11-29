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

app.post("/users", (req, res) => {
  // desestruturando a requisição json passa pero body
  const { nome, peso, idade, altura, genero } = req.body;
  // passando os campos para um var
  const userData = { nome, peso, idade, altura, genero };
  // fazendo campos para fazer teste de verificação
  for (const key in userData) {
    if (!userData[key]) {
      res.writeHead(400).end(`O campo ${key.toUpperCase()} é obrigatório!`);
    }
  }

  // criando um novo usuario
  const newUser = new User(nome, peso, idade, altura, genero);
  newUser.createUser();
  res.writeHead(201).end();
});

app.put("/users/user:id", (req, res) => {
  const userId = parseInt(req.params.id);

  const userData = req.body;

  const {} = req.body;
});

// listando a porta do servidor
app.listen(port, () => {
  console.log(`Server rodando no endereço localhost:${port}`);
});
