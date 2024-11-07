import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import './db/conn.js';
import typeDefs from './graphql/schema.js';
import resolvers from './graphql/resolver.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Set up Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers
});
// test change
await server.start();
server.applyMiddleware({ app, path: '/graphql' });

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`GraphQL is available at http://localhost:${PORT}/graphql`);
});
