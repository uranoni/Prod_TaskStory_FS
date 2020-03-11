import React, { Fragment, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import UserType from "../../components/StoryComponent/UserType";
import UserActivity from "../../components/StoryComponent/UserActivity";
import UserStep from "../../components/StoryComponent/UserStep";
import UserTask from "../../components/StoryComponent/UserTask";
import { makeStyles } from "@material-ui/core/styles";

import client from "../../utils/ApolloClient";
import allstories from "../../graphql/allStories";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
const CreateStory = () => {
  const [state, setstate] = useState({});
  useEffect(async () => {
    const result = await client.query({ query: allstories });
    console.log(result.data.story);
    setstate({ story: result.data.story });
  }, []);
  console.log(state);
  let ren = () => {
    if (state.story) {
      return state.story.id;
    }
  };
  return (
    <Fragment>
      <Grid container className={useStyles.root}>
        {/* {state.story && state.story.id} */}
        {/* {ren()} */}
        {state.story &&
          state.story.usertypes.nodes.map((e) => (
            <Grid direction="column">
              <Grid direction="row">
                <UserType key={e.id} title={e.title} />
              </Grid>
              <Grid direction="row" container>
                {e.useractivities.nodes.map((el) => (
                  <Grid direction="column">
                    <Grid direction="row">
                      <UserActivity title={el.title} />
                    </Grid>
                    <Grid direction="row" continer>
                      {el.userstepsByActivityId.nodes.map((stel) => (
                        <Grid direction="column">
                          <Grid direction="row">
                            <UserStep title={stel.title} />
                          </Grid>
                          <Grid direction="row"></Grid>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ))}
        {/*         
        <Grid direction="column">
          <Grid direction="row">
            <UserType />
          </Grid>
          <UserActivity />
          <UserStep />
          <UserTask />
        </Grid> */}
      </Grid>
    </Fragment>
  );
};

export default CreateStory;
