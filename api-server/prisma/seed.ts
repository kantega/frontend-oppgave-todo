import { PrismaClient, Prisma } from '@prisma/client';
import { renderToString } from 'react-dom/server';
import { tasks } from './tasks';

const prisma = new PrismaClient();

const columnData: Prisma.BoardColumnCreateInput[] = [
  {
    title: '📖  Backlog',
    order: 1,
    tasks: {
      create: tasks.map((task) => ({
        title: task.title as string,
        content: renderToString(task.content as JSX.Element),
        category: task.category.join(','),
        difficulty: task.difficulty as string,
      })),
    },
  },
  {
    title: '⏳  Under arbeid',
    order: 2,
  },
  {
    title: '✅  Ferdig',
    order: 3,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const c of columnData) {
    const column = await prisma.boardColumn.create({
      data: c,
    });
    console.log(`Created column with id: ${column.id}`);
  }
  console.log(`Seeding finished.`);
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
