import { gql } from "apollo-boost";

const stories = gql`
  {
    story(id: "74ea68ff-8b66-4950-b8db-47f163a978c6") {
      title
      usertypes {
        edges {
          node {
            id
            title
            useractivities {
              edges {
                node {
                  id
                  title
                  userstepsByActivityId {
                    edges {
                      node {
                        id
                        title
                        usertasksByStepId {
                          edges {
                            node {
                              title
                              id
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default stories;
