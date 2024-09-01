<!--
To start the server:
1. node server.js
2. open http://localhost:4000/graphql
3. experiment with queries and mutations
 -->

<!--
query-1
{
  books {
    id
    title
    author
  }
}

query-2
{
  book(id: "1") {
    title
    author
  }
}

-->

<!--

Setup steps

To implement GraphQL in your codebase, I'll walk you through the process using a basic example with Node.js, Express, and a simple in-memory data structure. This will help you understand how GraphQL works and how to integrate it into your existing application.

Step 1: Set Up the Project
Initialize the project:

mkdir graphql-example
cd graphql-example
npm init -y

npm install express express-graphql graphql

Step 2: Define the GraphQL Schema
A GraphQL schema defines the structure of your data and the queries/mutations that can be performed on it.

Create a new file called schema.js:

// schema.js
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

// Sample data
const books = [
    { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: '2', title: '1984', author: 'George Orwell' },
];

// Define a Book type
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: {
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        author: { type: GraphQLString },
    },
});

// Root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return books;
            },
        },
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return books.find(book => book.id === args.id);
            },
        },
    },
});

// Define the schema
module.exports = new GraphQLSchema({
    query: RootQuery,
});


Step 3: Set Up the Express Server
Now, set up your Express server to use the GraphQL middleware.

Create a file called server.js:

// server.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true, // Enables the GraphiQL interface
}));

// Start the server
app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000/graphql');
});

Step 4: Run the Server
Start the server by running:

node server.js


Your GraphQL server is now running on http://localhost:4000/graphql. You can open this URL in your browser to access the GraphiQL interface, which allows you to interact with your GraphQL API.

Step 5: Example Queries
In the GraphiQL interface, you can run queries like:

Get all books:
{
  books {
    id
    title
    author
  }
}

Get a book by ID:
{
  book(id: "1") {
    title
    author
  }
}
Summary
GraphQL schema defines the data structure and the operations that can be performed.
Express server integrates GraphQL using express-graphql middleware.
GraphiQL interface helps test and visualize GraphQL queries.
This is a basic setup to get you started. Depending on your application, you can expand this to include more complex data fetching, mutations, authentication, and integration with databases.

 -->
