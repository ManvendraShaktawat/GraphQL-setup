const books = require("../mocks/booksData");

const resolvers = {
  Query: {
    books: () => books,
    book: (_, args) => books.find((book) => book.id === args.id),
  },
  Mutation: {
    addBook: (_, { title, authorId, authorName }) => {
      const newBook = {
        id: `${books.length + 1}`,
        title,
        author: { id: authorId, name: authorName },
      };
      books.push(newBook);
      return newBook;
    },
    removeBook: (_, { id }) => {
      const index = books.findIndex((b) => b.id === id);
      const book = books[index];
      if (index !== -1) {
        books.splice(index, 1);
      }
      return book;
    },
  },
};

module.exports = resolvers;
