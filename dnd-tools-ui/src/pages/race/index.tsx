import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Error from '../../components/Error';
import Loading from '../../components/Loading';
import RaceNameCard from './RaceNameCard';

import api from '../../util/api';

/* Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

/* Helper Functions */
const formatQuery = (raceId: string) => {
  return `
query {
  race(id: ${raceId}) {
    id
    name
    image {
      url
    }
    quote {
      quote
      author
      source
    }
    description
  }
} 
`;
};

/* Types */
interface ParamTypes {
  id: string;
};

type Race = {
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
};

const Race = () => {
  const classes = useStyles();
  const {id} = useParams<ParamTypes>();

  const [isLoading, setLoading] = useState(true);
  const [race, setRace] = useState<Race | undefined>(undefined);

  const query = formatQuery(id);
  useEffect(() => {
    api.graphqlQuery(query).then((res) => {
      return res.data;
    }).then((res) => {
      setRace(res.data.race);
    }).then((res) => {
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (<Loading />);
  }

  if (race === undefined) {
    return (<Error />);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <RaceNameCard race={race}/>
        </Grid>
        <Grid item xs={8}>
          TBD
        </Grid>
      </Grid>
    </div>
  );
};

export default Race;
