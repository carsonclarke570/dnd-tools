import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

import Navigation from './components/Navigation';
import Dashboard from './pages/dashboard/Dashboard';
import RaceList from './pages/race/RaceList';

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
      <BrowserRouter>
        <Navigation>
          <Switch>
            <Route path="/dashboard" exact>
              <Dashboard />
            </Route>
            <Route path="/races" exact>
              <RaceList />
            </Route>
          </Switch>
        </Navigation>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
