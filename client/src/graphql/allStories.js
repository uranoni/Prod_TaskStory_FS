import { gql } from "apollo-boost";

const stories = gql`
 {
  story(id: "74ea68ff-8b66-4950-b8db-47f163a978c6") {
    id
    createdAt
    nodeId
    title
    storydesc
    imgsrc
    usertypes {
      nodes {
        id
        title
        useractivities {
          nodes {
            id
            title
            userstepsByActivityId {
              nodes {
                id
                title
                usertasksByStepId {
                  nodes {
                    id
                    title
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
