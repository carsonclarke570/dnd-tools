// import React, {useEffect, useState} from 'react';

// import Error from '../../components/Error';
// import Loading from '../../components/Loading';
// import RaceType from '../../types/Race';
// import auth from '../../util/auth';
// import api from '../../util/api';

// // import {makeStyles} from '@material-ui/core/styles';

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     zIndex: theme.zIndex.drawer + 1,
// //   },
// // }));

// /* Helper Functions */
// const formatQuery = () => {
//   const user = auth.getUserInfo();
//   return `
// query {
//   races(where: {user: {id: ${user.id}}}) {
//     id
//     name
//     quote {
//       quote
//       author
//       source
//     }
//   }
// }
// `;
// };

// const RaceList = () => {
// //   const classes = useStyles();

//   const [isLoading, setLoading] = useState(true);
//   const [races, setRaces] = useState<RaceType[] | undefined>(undefined);

//   const query = formatQuery();
//   useEffect(() => {
//     api.graphqlQuery(query).then((res) => {
//       setRaces(res.data.data.races);
//       setLoading(false);
//     });
//   }, []);

//   if (isLoading) {
//     return (<Loading />);
//   }

//   if (races === undefined) {
//     return (<Error />);
//   }

//   /* Render Code */
//   const generateRaceList = (races: RaceType[]) => {
//     return races.map((race, idx) => {
//       return (
//         <a href={'/race/' + race.id} key={idx}>
//           {race.name}
//         </a>
//       );
//     });
//   };

//   const raceList = generateRaceList(races);

//   return (<div>{raceList}</div>);
// };

// export default RaceList;
export default {};
