import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Tenta criar um usuário
  const user = await prisma.user.create({
    data: {
      name: "Andrey Developer",
      email: "andrey@techlead.com",
    },
  });
  console.log("Usuário criado:", user);

  // Tenta ler o usuário
  const allUsers = await prisma.user.findMany();
  console.log("Todos usuários:", allUsers);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
