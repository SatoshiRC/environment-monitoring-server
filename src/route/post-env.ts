import fastify = require("fastify");
import { prisma } from "../prisma";

interface IEnvBody {
    temperature: number;
    humidity: number;
    pressure: number;
}

const DEFAULT_ENV : IEnvBody = {
    temperature: 0,
    humidity: 0,
    pressure: 0,
};

export class RoomEnvRoutes {
    // use shared prisma instance
    initRoutes = (server: any, opts: any, done: any) => {
        server.post('/room', this.postHandler);
        done();
    }

    async postHandler(request: fastify.FastifyRequest<{ Body: IEnvBody }>, reply: fastify.FastifyReply) {
        try {
            console.log('Received data:', request.body?.temperature, request.body?.humidity, request.body?.pressure);
            const body = { ...DEFAULT_ENV, ...request.body };
            const result = await prisma.room_enviroments.create({
                data: {
                    temperature: body.temperature,
                    humidity: body.humidity,
                    pressure: body.pressure,
                }
            });
            reply.send(result);
        } catch (error: any) {
            reply.status(500).send({ error: 'Failed to save data' });
        }
    }
}