import express from 'express';
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', categoryRoutes);

export default app;