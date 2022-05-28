import cors from 'cors';
import helmet from 'helmet';
import express from 'express';

import logger from '@/middleware/logger';
import routes from '@/routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(logger());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

export default app;
