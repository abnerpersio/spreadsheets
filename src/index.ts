import express from 'express';
import 'express-async-errors';

import { ErrorHandler } from './app/middlewares/ErrorHandler';
import './config/env';
import { routes } from './routes';

const server = express();

server.use(express.json());
server.use(routes);

server.use(ErrorHandler);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`server is running at port ${PORT}`));
