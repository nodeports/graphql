import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema/user";
import resolvers from "./resolvers/user";
import connectDB from "./config/database";

const startServer = async () => {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  await connectDB();

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
