import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import text from '../../util/text';

/* Styled */
const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '5px',
    height: '100%',
  },
  // media: {
  //   height: 200,
  // },
  // quote: {
  //   fontStyle: 'italic',
  // },
  // divider: {
  //   marginTop: theme.spacing(1),
  //   marginBottom: theme.spacing(1),
  // },
}));

/* Types */
type LoreSection = {
  name: string,
  text: string
}

type RaceLoreSectionsProps = {
  loreSections: LoreSection[],
};

const RaceLoreSections = (props: RaceLoreSectionsProps) => {
  const classes = useStyles();
  const {loreSections} = props;

  const generateSections = (sections: LoreSection[]) => {
    return sections.map((section, idx) => (
      <Grid item xs={12} key={idx}>
        <Typography gutterBottom variant="h5" component="h2">
          {section.name}
        </Typography>
        <Typography variant="body2" component="p">
          {text.nl2br(section.text)}
        </Typography>
      </Grid>
    ));
  };

  const sections = generateSections(loreSections);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={3}>
          {sections}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RaceLoreSections;
