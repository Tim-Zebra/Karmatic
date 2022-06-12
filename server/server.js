// Sets up our dependencies
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

// Calls our middelware
const { authMiddleware } = require('./utils/auth');

// Logic for querying
const { typeDefs, resolvers } = require('./schemas');

// Sets DB, port, and app
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
const app = express();

// Creates server with middleware
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Checks if deployed as build and sets static if so
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Sets landingpage as index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the imported async function to start the server
  startApolloServer(typeDefs, resolvers);