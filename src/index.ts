import fastify = require("fastify");
import { TmpRoutes } from "./route/get-tmp";
import { RoomEnvRoutes } from "./route/post-room";
import { prisma } from "./prisma";
require('dotenv').config();

const server = fastify({
    logger: {
        level: 'info',
        file: 'environment-monitoring-server.log',
    }
});

server.get('/', async (request, reply) => {
});

const tmpRoutes = new TmpRoutes();
server.register(tmpRoutes.initRoutes);

const postRoomRoutes = new RoomEnvRoutes();
server.register(postRoomRoutes.initRoutes);

const postEnvRoutes = new RoomEnvRoutes();
server.register(postEnvRoutes.initRoutes);

const start = async() =>{
    try {
        await server.listen({ port: parseInt(process.env.PORT || '3000'), host: '0.0.0.0' });
        server.log.info(`Server is running at http://localhost:${process.env.PORT || '3000'}`);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
}

start();