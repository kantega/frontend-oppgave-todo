import { config as dotenv } from "dotenv";
import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';

dotenv({path: __dirname + "/../../.env"});

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Express with Prisma example file:
// https://github.com/prisma/prisma-examples/blob/latest/typescript/rest-express/src/index.ts
// See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api

app.get('/columns', async (req, res) => {
  const columns = await prisma.boardColumn.findMany();
  res.json(columns);
});

app.get('/tasks', async (req, res) => {
  const tasks = await prisma.boardTask.findMany();
  res.json(tasks);
});

app.put('/task/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content, category, difficulty, columnId, completed } = req.body;

  try {
    const updatedTask = await prisma.boardTask.update({
      where: { id: Number(id) || undefined },
      data: { title, content, category, difficulty, columnId, completed },
    });
    res.json(updatedTask);
  } catch (error) {
    res.json({ error: `Error in request` });
  }
});

app.listen(process.env.API_PORT, () => console.log(`🚀 API server ready at: http://localhost:${process.env.API_PORT}`));
