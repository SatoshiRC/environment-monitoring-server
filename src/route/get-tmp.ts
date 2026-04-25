
import fastify = require("fastify");

export class TmpRoutes {
    initRoutes = (server: any, opts: any, done: any) => {
        server.get('/tmp', this.getHandler);
        server.post('/tmp', this.postHandler);
        done();
    }

    async getHandler(request: fastify.FastifyRequest, reply: fastify.FastifyReply) {
        return { tmp: 25.5 };
    }

    async postHandler(request: fastify.FastifyRequest, reply: fastify.FastifyReply) {
        // Handle POST request
    }
}