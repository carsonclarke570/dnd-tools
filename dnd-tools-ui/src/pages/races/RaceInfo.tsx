import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import RaceType from '../../types/Race';

import RaceNameCard from './RaceNameCard';
import RaceLoreSections from './RaceLoreSections';

/* Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

/* Types */
type RaceInfoProps = {
  race: RaceType,
};

const RaceInfo = (props: RaceInfoProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <RaceNameCard race={props.race}/>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <RaceLoreSections loreSections={props.race.loreSections}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default RaceInfo;
