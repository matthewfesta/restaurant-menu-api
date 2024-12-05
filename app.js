import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from './menu/index.js';
import { ValidationError, NotFoundError } from './utils/errors.js';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (error) => {
        if (error.originalError instanceof ValidationError) {
            return {
                message: error.message,
                code: 'VALIDATION_ERROR',
                status: 400
            };
        }
        if (error.originalError instanceof NotFoundError) {
            return {
                message: error.message,
                code: 'NOT_FOUND',
                status: 404
            };
        }
        return {
            message: 'Internal server error',
            code: 'INTERNAL_SERVER_ERROR',
            status: 500
        };
    },
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${ url }`);
