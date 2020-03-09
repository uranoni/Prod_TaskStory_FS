import { gql } from "apollo-boost";

const stories = gql`
  {
    stories {
      edges {
        node {
          id
        }
      }
    }
  }
`;

export default stories;
