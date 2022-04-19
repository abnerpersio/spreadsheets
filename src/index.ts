import Fastify from 'fastify';

import { routes } from './routes';

const server = Fastify();

routes(server);

const PORT = process.env.PORT || 3000;

server.listen(PORT).then(() => console.log(`server is running at port ${PORT}`));
