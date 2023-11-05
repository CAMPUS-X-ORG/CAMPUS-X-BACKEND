import express from 'express';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import { authenticateToken } from './middlewares/authMiddleware';
import confeedRoutes from './routes/confeedRoutes';

const app = express();
app.use(express.json());
app.use('/user', authenticateToken, userRoutes);
app.use('/confeed', authenticateToken, confeedRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello "updated" world!');
});

app.listen(3000, () => {
  console.log('Server ready at localhost:5000');
});
