import { Router, Request, Response } from 'express';

const router = Router();

const entries = [
  {
    id: 1,
    title: 'Study Math',
    content:
      'Today i woke up at 6:30 am to prepare for my online Math class at ISIL',
  },
  {
    id: 2,
    title: 'Study Math',
    content:
      'Today i woke up at 6:30 am to prepare for my online Math class at ISIL',
  },
  {
    id: 3,
    title: 'Study Math',
    content:
      'Today i woke up at 6:30 am to prepare for my online Math class at ISIL',
  },
];

router.get('/', (_req: Request, res: Response) => {
  res.json(entries);
});

router.post('/', (req: Request, res: Response) => {
  const newEntry = {
    id: entries.length + 1,
    title: req.body.title,
    content: req.body.content,
  };

  entries.push(newEntry);

  res.json(newEntry);
});

export default router;
