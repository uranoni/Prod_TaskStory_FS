import React from "react";

import { Grid } from "@material-ui/core";

import StoryEntry from "../../components/Story/StoryEntry";

const MainStory = () => {
  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='center'
      style={{ height: "100vh" }}
      spacing={4}>
      <Grid item>
        <StoryEntry
          imgurl='create.svg'
          title='Create your story'
          desc='this route can create your story'
          path='/'
        />
      </Grid>
      <Grid item>
        <StoryEntry
          imgurl='manage.svg'
          title='Manage your story'
          desc='this route can help you manage your story'
          path='/'
        />
      </Grid>
    </Grid>
  );
};

export default MainStory;
