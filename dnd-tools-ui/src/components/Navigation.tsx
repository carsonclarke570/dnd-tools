import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavigationBar from './NavigationBar';
import NavigationDrawer from './NavigationDrawer';

/* Constants */
const TOP_OFFSET = 62;
const SPACING = 3;

/* Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(SPACING),
    paddingTop: TOP_OFFSET + theme.spacing(SPACING),
  },
}));

/* Types */
type NavigationProps = {
    children: React.ReactNode
}

const Navigation = (props: NavigationProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavigationBar />
      <NavigationDrawer />
      <main className={classes.content}>
        {props.children}
      </main>
    </div>
  );
};

export default Navigation;
