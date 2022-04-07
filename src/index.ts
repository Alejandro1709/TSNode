import express, { Request, Response } from 'express';

const app = express();

// Middlewares
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello');
});

const PORT = process.env.PORT || 2030;

app.listen(PORT, () => console.log(`Server is live at port: ${PORT}`));
