import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import api from '../../util/api';
import text from '../../util/text';

/* Styled */
const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '5px',
    height: '100%',
  },
  media: {
    height: 200,
  },
  quote: {
    fontStyle: 'italic',
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

/* Types */
type RaceNameCardProps = {
  race: {
    name: string,
    image: {
      url: string,
    },
    quote: {
      quote: string,
      author: string,
      source: string,
    },
    description: string,
  },
};

const RaceNameCard = (props: RaceNameCardProps) => {
  const classes = useStyles();
  const {race} = props;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={api.API_URL + (race.image?.url || '')}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {race.name}
        </Typography>
        <Typography
          className={classes.quote}
          variant="caption"
          color="textSecondary"
          component="p"
        >
          {'"' + race.quote?.quote + '"'}
        </Typography>
        <Typography variant="body2" component="h2" align='right'>
          {'- ' + race.quote?.author + ', ' + race.quote?.source}
        </Typography>
        <Divider className={classes.divider}/>
        <Typography variant="body2" component="p">
          {text.nl2br(race.description)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RaceNameCard;
