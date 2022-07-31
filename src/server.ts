import fastify from 'fastify';
import { main_app } from './app';
import { PORT } from './config';
import pino from 'pino';

const server = fastify({
	logger: {
		transport: {
			target: 'pino-pretty',
			options: { colorize: true },
		},
	},
});

server.register(main_app);

server.listen(PORT, '0.0.0.0');
