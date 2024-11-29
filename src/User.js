import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default class User {
  constructor(nome, peso, idade, altura, genero) {
    this.nome = nome;
    this.peso = peso;
    this.idade = idade;
    this.altura = altura;
    this.genero = genero.toLowerCase();
  }

  async createUser() {
    let tmb;
    
    //calculo tmb  
    if (this.genero === "feminino") {
      tmb = 655 + 9.6 * this.peso + 1.8 * this.altura - 4.7 * this.idade;
    } else {
      tmb = 66 + 13.7 * this.peso + 5 * this.altura - 6.8 * this.idade;
    }

    // transformando o resultado em float
    this.tmb = parseFloat(tmb.toFixed(0));

    // criando o novo usuario no bando 
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
