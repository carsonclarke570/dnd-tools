import React from 'react';

import {makeStyles} from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

/* Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  card: {
    maxWidth: 345,
  },
  cardContent: {
    textAlign: 'center',
  },
  button: {
    width: '200px',
    margin: theme.spacing(2),
  },
}));

/* Types */
type Provider = {
  name: string,
  // icon: JSX.Element,
  slug: string
};

const API_URL = 'http://localhost:1337';
const availableProviders: Provider[] = [
  {name: 'Google', slug: '/connect/google'},
];

const LogIn = () => {
  const classes = useStyles();

  const handleProviderClick = (provider: Provider) => {
    return (() => (window.location.href = API_URL + provider.slug));
  };

  const generateProviderLinks = (providerList: Provider[]) => {
    return providerList.map((provider, idx) => (
      <Button
        className={classes.button}
        onClick={handleProviderClick(provider)}
        key={idx}
        variant="contained"
        color='primary'>
        {provider.name}
      </Button>
    ));
  };

  const providerLinks = generateProviderLinks(availableProviders);

  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
      className={classes.root}
    >
      <Card className={classes.card}>
        <CardMedia
          component='img'
          alt='Login Image'
          height='20'
          // eslint-disable-next-line max-len
          image='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVAAAACWCAMAAAC/8CD2AAAAA1BMVEUmpppzPWa9AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8GxXYAARizDlgAAAAASUVORK5CYII='
          title='Login Image'
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Log In or Sign Up
          </Typography>
        </CardContent>
        <CardActionArea className={classes.cardContent}>
          {providerLinks}
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default LogIn;
