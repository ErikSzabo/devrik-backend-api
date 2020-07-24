import express, { Application, Request, Response } from 'express';
import path from 'path';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

require('dotenv').config();

import { notFound, errorHandler } from './middlewares';
import api from './api/api.routes';
import auth from './auth/auth.routes';
import frontpage from './frontpage';

const app: Application = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send(frontpage);
});

app.use(api);
app.use(auth);

app.use(notFound);
app.use(errorHandler);

export default app;
