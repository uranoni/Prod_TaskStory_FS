import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Button from "@material-ui/core/Button";

import DrawContext from "../context/DrawContext";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});
const routegroup = [
  { text: "Home", path: "/" },
  { text: "Story", path: "/story" },
  { text: "Task", path: "/task" },
  { text: "Setting", path: "/setting" }
];

export default function DrawerLeft() {
  const classes = useStyles();
  const history = useHistory();

  // function redirectPath(path) {
  //   history.push(path);
  // }
  const sideList = (side) => (
    <div className={classes.list} role='presentation'>
      <List>
        {routegroup.map((item, index) => (
          <ListItem
            button
            key={index}
            path={item.path}
            onClick={() => {
              history.push(item.path);
            }}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}

        <ListItem>
          <DrawContext.Consumer>
            {(value) => (
              <Button
                variant='contained'
                color='primary'
                onClick={() => value.toggleDrawer()}>
                Return
              </Button>
            )}
          </DrawContext.Consumer>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <DrawContext.Consumer>
        {(value) => <Drawer open={value.drawstatus}>{sideList("left")}</Drawer>}
      </DrawContext.Consumer>
    </div>
  );
}
