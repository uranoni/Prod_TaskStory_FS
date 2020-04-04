import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 300,
    maxWidth: 445
  },
  media: {
    height: 300
  }
});

export default function StoryEntry({ imgurl, title, desc }) {
  const classes = useStyles();
  let history = useHistory();
  function test(e) {
    e.preventDefault();
    history.push("/");
  }
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={test} onMouseEnter={() => ({})}>
        <CardMedia className={classes.media} image={imgurl} title={title} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
