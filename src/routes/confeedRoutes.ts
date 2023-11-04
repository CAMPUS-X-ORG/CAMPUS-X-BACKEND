import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Confeed CRUD

// Create Confeed
router.post('/', async (req, res) => {
  const { content, image } = req.body;
  // @ts-ignore
  const user = req.user;

  try {
    const result = await prisma.confeed.create({
      data: {
        content,
        image,
        userId: user.id,
      },
      include: { user: true },
    });

    res.json(result);
  } catch (e) {
    res.status(400).json({ error: 'Username and email should be unique' });
  }
});

// list Confeed
router.get('/', async (req, res) => {
  const allConfeed = await prisma.confeed.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          username: true,
          image: true,
        },
      },
    },
  });
  res.json(allConfeed);
});

// get one Confeed
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  console.log('Query confeed with id: ', id);

  const confeed = await prisma.confeed.findUnique({
    where: { id: Number(id) },
    include: { user: true },
  });
  if (!confeed) {
    return res.status(404).json({ error: 'Confeed not found!' });
  }

  res.json(confeed);
});

// update Confeed
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `Not Implemented: ${id}` });
});

// delete Confeed
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.confeed.delete({ where: { id: Number(id) } });
  res.sendStatus(200);
});

export default router;
