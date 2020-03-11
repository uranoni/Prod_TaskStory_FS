import React, { Fragment, useState } from "react";
import Paper from "@material-ui/core/Paper";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  paper: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
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

const UserType = ({ title }) => {
  const style = useStyles();
  const [state, setstate] = useState();
  return (
    <Fragment>
      <Paper className={style.paper} elevation={3}>
        {title}
      </Paper>
    </Fragment>
  );
};

export default UserType;
