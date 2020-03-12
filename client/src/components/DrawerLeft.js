import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';

import DrawContext from '../context/DrawContext'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function DrawerLeft() {
  const classes = useStyles();
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
    >
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <ListItem>
          <DrawContext.Consumer>
            {(value) => (<Button variant="contained" color="primary" onClick={() => value.toggleDrawer()}>Return</Button>)}
          </DrawContext.Consumer>
        </ListItem>

      </List>
    </div>
  );


  return (
    <div>
      <DrawContext.Consumer>
        {value => (
          <Drawer open={value.drawstatus} >
            {sideList('left')}
          </Drawer>)}

      </DrawContext.Consumer>
    </div>
  );
}
