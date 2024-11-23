import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default class User {
  constructor(nome, peso, idade, altura, genero) {
    this.nome = nome;
    this.peso = peso;
    this.idade = idade;
    this.altura = altura;
    this.genero = genero;
  }

  async createUser() {
    const tmb =
      66 + (13, 7 * this.peso) + 5 * this.altura - (6, 8 * this.idade);

    this.tmb = parseFloat(tmb.toFixed(0));

    await prisma.user.create({
      data: {
        nome: this.nome,
        peso: this.peso,
        idade: this.idade,
        altura: this.altura,
        genero: this.genero,
        tmb: this.tmb,
      },
    });
  }
}
