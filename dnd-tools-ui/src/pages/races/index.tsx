import React, {useEffect, useState} from 'react';

import {makeStyles} from '@material-ui/core/styles';

import Error from '../../components/Error';
import Loading from '../../components/Loading';
import RaceType from '../../types/Race';
import api from '../../util/api';
import auth from '../../util/auth';

import RaceTable from './RaceTable';

/* Styles */
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

/* Helper Functions */
const formatQuery = () => {
  const user = auth.getUserInfo();
  return `
query {
  races(where: {user: {id: ${user.id}}}) {
    id
    name
  }
}
`;
};

const RaceList = () => {
  const classes = useStyles();

  const [isLoading, setLoading] = useState(true);
  const [races, setRaces] = useState<RaceType[] | undefined>(undefined);

  const query = formatQuery();
  useEffect(() => {
    api.graphqlQuery(query).then((res) => {
      api.graphqlQuery(query).then((res) => {
        setRaces(res.data.data.races);
        setLoading(false);
      });
    });
  }, []);

  if (isLoading) {
    return (<Loading />);
  }

  if (!races) {
    return (<Error />);
  }

  return (
    <div className={classes.root}>
      <RaceTable races={races}/>
    </div>
  );
};

export default RaceList;
