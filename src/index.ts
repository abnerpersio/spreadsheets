import express from 'express';

import { routes } from './routes';

const server = express();

server.use(routes);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`server is running at port ${PORT}`));
