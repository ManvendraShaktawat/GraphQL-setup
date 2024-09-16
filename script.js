const getAllBooks = `{
    books {
        id
        title
        author {
            id
            name
        }
    }
}`;

const getBook = ({ id }) => `{
    book(id: ${id}) {
        id
        title
        author {
            id
            name
        }
    }
}`;

const addNewBook = ({ title, authorId, authorName }) => `mutation {
    addBook(title: "${title}", authorId: "${authorId}", authorName: "${authorName}") {
        id
        title
        author {
            id
            name
        }
    }
}`;

const removeBook = ({ id }) => `mutation {
    removeBook(id: ${id}) {
        id
        title
        author {
            id
            name
        }
    }
}`;

async function GQLRequest({ type, payload }) {
  let query;

  if (type === "query") {
    query = payload ? getBook(payload) : getAllBooks;
  } else {
    query = payload.id ? removeBook(payload) : addNewBook(payload);
  }

  try {
    const response = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const result = await response.json();
    console.log(result.data);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

GQLRequest({ type: "query" });
GQLRequest({ type: "query", payload: { id: "1" } });

GQLRequest({
  type: "mutation",
  payload: { title: "Book3", authorId: 13, authorName: "Chetan" },
});

GQLRequest({
  type: "mutation",
  payload: { id: "2" },
});
