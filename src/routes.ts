import { FastifyInstance, RouteShorthandOptions } from 'fastify';

export function routes(server: FastifyInstance) {
  const opts: RouteShorthandOptions = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
            },
          },
        },
      },
    },
  };

  server.get('/ping', opts, async (request, reply) => {
    return { success: true };
  });
}
