<!--

IMPORTANT files
1. bookSchema.graphql
2. resolvers/bookResolvers.js
3. server.js
4. script.js

NOTE: 'script.js' is not required if you are directly experimenting on GQL playground

To start the server:
1. npm start
2. open http://localhost:4000/graphql
3. experiment with queries and mutations
4. alternatively, open the index HTML file which makes API calls using queries
 -->

<!--
query-1
{
  books {
    id
    title
    author {
      id
      name
    }
  }
}

query-2
{
  book(id: "2") {
    id
    title
    author {
      id
      name
    }
  }
}

-->

<!--

Setup steps

To implement GraphQL in our codebase, lets walk through the process using a basic example with Node.js, Express, and a simple in-memory data structure. This will help us understand how GraphQL works and how to integrate it into our existing application.

Step 1: Set Up the Project
Initialize the project:

mkdir graphql-example
cd graphql-example
npm init -y

npm install express express-graphql graphql @graphql-tools/schema

Step 2: Define the GraphQL Schema
A GraphQL schema defines the structure of your data and the queries/mutations that can be performed on it.

Step 3: Set Up the Express Server
Now, set up your Express server to use the GraphQL middleware.

Step 4: Run the Server

Step 5: Example Queries

Summary
GraphQL schema defines the data structure and the operations that can be performed.
Express server integrates GraphQL using express-graphql middleware.
GraphiQL interface helps test and visualize GraphQL queries.
This is a basic setup to get you started. Depending on your application, you can expand this to include more complex data fetching, mutations, authentication, and integration with databases.

 -->
