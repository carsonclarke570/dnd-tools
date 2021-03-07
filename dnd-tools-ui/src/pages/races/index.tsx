import React, {useEffect} from 'react';

import auth from '../../util/auth';
import api from '../../util/api';

// import {makeStyles} from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
// }));

/* Helper Functions */
const formatQuery = () => {
  const user = auth.getUserInfo();
  return `
query {
  races(where: {user: {id: ${user.id}}}) {
    id
    name
    quote {
      quote
      author
      source
    }
  }
} 
`;
};

const RaceList = () => {
//   const classes = useStyles();

  const query = formatQuery();
  useEffect(() => {
    api.graphqlQuery(query).then((res) => {
      console.log(res.data);
    });
  }, []);

  return (<div>My Races</div>);
};

export default RaceList;
