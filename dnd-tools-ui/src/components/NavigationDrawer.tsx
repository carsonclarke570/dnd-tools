import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';

import NavigationList from './NavigationList';

/* Constants */
const DRAWER_WIDTH = 240;

/* Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

const NavigationDrawer = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.root}
      variant="permanent"
      classes={{paper: classes.drawerPaper}}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <NavigationList />
      </div>
    </Drawer>
  );
};

export default NavigationDrawer;
