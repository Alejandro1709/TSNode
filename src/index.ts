import express, { Request, Response } from 'express';
import diariesRoutes from './routes/diaries';

const app = express();

// Middlewares
app.use(express.json());

app.use('/api/v1/diaries', diariesRoutes);

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello');
});

const PORT = process.env.PORT || 2030;

app.listen(PORT, () => console.log(`Server is live at port: ${PORT}`));
