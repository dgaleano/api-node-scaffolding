import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import router, { APIRouter } from './routes/index.js';

const app = express();
const APIPrefix = '/v1';

app.use(logger('dev'));
app.use(express.json({
  limit: '10mb',
}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());

app.use('/', router);
app.use(APIPrefix, APIRouter);

export default app;
