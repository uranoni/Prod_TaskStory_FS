import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:13145/graphql"
});

export default client;
