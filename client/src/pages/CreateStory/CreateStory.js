import React, { Fragment, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import UserType from "../../components/StoryComponent/UserType";
import UserActivity from "../../components/StoryComponent/UserActivity";
import UserStep from "../../components/StoryComponent/UserStep";
import UserTask from "../../components/StoryComponent/UserTask";

import client from "../../utils/ApolloClient";
import allstories from "../../graphql/allStories";

const CreateStory = () => {
  const [state, setstate] = useState({});
  useEffect(async () => {
    const result = await client.query({ query: allstories });
    console.log(result);
    setstate(result.data);
  }, {});

  return (
    <Fragment>
      <Grid container>
        <Grid direction="column">
          <Grid direction="row">
            <UserType />
          </Grid>
          <UserActivity />
          <UserStep />
          <UserTask />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CreateStory;
