import React, { Fragment, useEffect, useState } from "react";
import UserType from "../../components/StoryComponent/UserType";
import UserActivity from "../../components/StoryComponent/UserActivity";
import UserStep from "../../components/StoryComponent/UserStep";
import UserTask from "../../components/StoryComponent/UserTask";

import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import useStyles from "./CreateStoryCss";

import client from "../../utils/ApolloClient";
import allstories from "../../graphql/allStories";

const CreateStory = () => {
  // const [state, setstate] = useState({});
  // useEffect(async () => {
  //   const result = await client.query({ query: allstories });
  //   // console.log(JSON.stringify(result.data.story, null, 2));
  //   setstate({ story: result.data.story });
  // }, []);
  const [state, setstate] = useState({});
  async function fetchProduct() {
    const response = await client.query({ query: allstories })
    console.log(response)
    setstate({ story: response.data.story });
  }
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <Fragment>
      <CssBaseline />
      {/* container */}
      <Box style={useStyles.container}>
        {state.story && state.story.usertypes.nodes.map((e) => (
          <Box key={e.id} style={useStyles.userbox}>
            <Box style={useStyles.userboxtop}>
              <UserType title={e.title} />
            </Box>
            <Box style={useStyles.userboxbottom}>

              {/* active渲染位置 */}
              {e.useractivities.nodes.map((el) => (
                <Box key={el.id} style={useStyles.activitybox} css={{
                  width: `calc(100% / ${e.useractivities.nodes.length})`
                }}>
                  <Box style={useStyles.activitytop}>
                    <UserActivity title={el.title} />
                  </Box>
                  <Box style={useStyles.activitybottom}>

                    {/* step渲染位置 */}
                    {el.userstepsByActivityId.nodes.map((elm) => (
                      <Box key={elm.id} style={useStyles.stepbox} css={{
                        width: `calc(100% / ${el.userstepsByActivityId.nodes.length})`
                      }}>
                        <Box style={useStyles.steptop}>
                          <UserStep title={elm.title} />
                        </Box>
                        <Box style={useStyles.stepbottom}>

                          {/* task渲染位置 */}
                          {elm.usertasksByStepId.nodes.map((elme) => (
                            <Box key={elme.id} style={useStyles.stepbox} css={{
                              width: `calc(100% / ${elm.usertasksByStepId.nodes.length})`
                            }}>
                              <Box style={useStyles.steptop}>
                                <UserTask title={elme.title} />
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

    </Fragment >
  );
};

export default CreateStory;
