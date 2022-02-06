const { ApolloServer } = require('apollo-server');
const typeDefs = require('./utills/Schema');
const resolvers = require('./utills/Resolvers');


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});