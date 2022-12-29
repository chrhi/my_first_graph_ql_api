import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/typeDeves.js";
import { resolvers } from "./schema/resolvers.js";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`your api is running at ${url}`);
});
