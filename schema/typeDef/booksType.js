const { GraphQLObjectType, GraphQLString } = require("graphql");

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
  },
});

module.exports = BookType;
