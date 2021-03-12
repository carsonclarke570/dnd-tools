import React from 'react';

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

// import fonts from './fonts';

/* Theme */
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#26a69a',
    },
  },
  typography: {
    h3: {
      fontFamily: 'Mr Eaves Small Caps',
      fontWeight: 800,
      fontSize: '.529cm',
    },
  },
});

/* Types */
type ThemeProps = {
  children: React.ReactNode,
};

const Theme = (props: ThemeProps) => (
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
);

export default Theme;
