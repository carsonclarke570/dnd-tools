import React from 'react';

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

import Navigation from './components/Navigation';

/* Theme */
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#26a69a',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation>
        Test
      </Navigation>
    </ThemeProvider>
  );
};

export default App;
