import React, {useEffect, useState} from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import RaceType from '../../types/Race';
import api from '../../util/api';

import RaceInfo from './RaceInfo';

/* Helper Functions */
const raceQuery = (raceId: string) => {
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
    loreSections {
      name
      text
    }
  }
} 
`;
};

/* Types */
type RaceTableProps = {
  races: RaceType[],
};

const RaceTable = (props: RaceTableProps) => {
  const [raceId, setRaceId] = useState<string | undefined>(undefined);
  const [race, setRace] = useState<RaceType | undefined>(undefined);

  useEffect(() => {
    if (!raceId) {
      return;
    }
    const query = raceQuery(raceId);
    api.graphqlQuery(query).then((res) => {
      setRace(res.data.data.race);
    });
  }, [raceId]);

  const handleClick = (id: string) => {
    return () => {
      setRaceId(id);
    };
  };

  const generateTableBody = (raceList: RaceType[]) => {
    return raceList.map((race, idx) => (
      <TableRow key={'race' + idx} selected={raceId === race.id} hover>
        <TableCell component="th" scope="row" onClick={handleClick(race.id)}>
          {race.name}
        </TableCell>
      </TableRow>
    ));
  };

  const generateTable = (raceList: RaceType[]) => {
    const tableBody = generateTableBody(raceList);
    return (
      <TableContainer component={Paper}>
        <Table size="small" aria-label="race table">
          <TableHead>
            <TableCell>Name</TableCell>
          </TableHead>
          <TableBody>
            {tableBody}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const table = generateTable(props.races);
  if (race) {
    return (
      <Grid container spacing={3}>
        <Grid item xs={2}>
          {table}
        </Grid>
        <Grid item xs={10}>
          <RaceInfo race={race}/>
        </Grid>
      </Grid>
    );
  };

  return (<>{table}</>);
};

export default RaceTable;
