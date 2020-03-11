import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  paper: {
    background: `linear-gradient(315deg, #f8ceec 0%, #a88beb 74%)`,
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 100,
    width: 100,
    padding: "0 30px",
    wordWrap: `break-word`
  }
});

const UserStep = ({ title }) => {
  const style = useStyles();
  return (
    <Fragment>
      <Paper className={style.paper} elevation={3}>
        {title}
      </Paper>
    </Fragment>
  );
};

export default UserStep;
