import React from 'react';
import {Link} from 'react-router-dom';

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import auth from '../util/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const NavigationBar = () => {
  const classes = useStyles();
  const hasToken = auth.getToken() !== null;

  const generateAuthButton = (loggedIn: boolean) => {
    if (loggedIn) {
      return (<Button color="inherit" disabled>Log Out</Button>);
    }
    return (
      <Link to='/auth' className={classes.link}>
        <Button color="inherit">Log In</Button>
      </Link>
    );
  };

  const authButton = generateAuthButton(hasToken);

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          DnD Tools
        </Typography>
        {authButton}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
