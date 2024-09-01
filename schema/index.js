const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLSchema,
} = require("graphql");
const BookType = require("./typeDef/booksType");
const books = require("../mockData");

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
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
        return books.find((b) => b.id === args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
