const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const fs = require("fs");
const path = require("path");
const cors = require("cors");

const resolvers = require("./resolvers/bookResolvers");

// Load the GraphQL SDL schema from file
const typeDefs = fs.readFileSync(
  path.join(__dirname, "schema/bookSchema.graphql"),
  "utf8"
);

// Create an executable schema using SDL and resolvers
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

// need the below 2 statement to avoid CORS issue while directly opening HTML file locally
// if the HTML is served via an HTTP server, then the CORS issue would no longer exist
app.use(cors());
app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000/graphql");
});
