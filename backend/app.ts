import express, { Express, Request, Response, NextFunction } from 'express';
import path from 'path';
import cors from 'cors';
import logger from 'morgan';
import * as dotenv from 'dotenv';
import expressRateLimit from 'express-rate-limit';
import './utils/dbConnect';

import questionRoutes from './routes/questionRoutes';
import responseRoutes from './routes/responseRoutes';
import uploadRoutes from './routes/uploadRoutes';
import adminRoutes from './routes/adminRoutes';

const limiter = expressRateLimit({ windowMs: 3 * 60 * 1000, max: 50 });

const app: Express = express();
app.use(cors());
app.use(logger('dev'));
app.use(limiter);
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/question/', questionRoutes);
app.use('/api/response/', responseRoutes);
app.use('/api/upload/', uploadRoutes);
app.use('/api/admin/', adminRoutes);

app.use('/uploads', express.static('uploads'));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(path.resolve(), 'client', 'build')));
  app.get('*', (req, res) =>
    res.sendFile(path.join(path.resolve(), 'client', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => res.send('API is running'));
}

app.use((req, res, next) => {
  const error = new Error(`Not Found -${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  console.log(err);
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

export default app;
