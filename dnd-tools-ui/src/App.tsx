import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

import Navigation from './components/Navigation';
import Dashboard from './pages/dashboard';
import RaceList from './pages/race';

import Auth from './pages/auth/GoogleAuthCallback';
import LogIn from './pages/auth/LogIn';

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
            {/* Authentication */}
            <Route path="/auth/callback/google">
              <Auth />
            </Route>

            {/* Login */}
            <Route path="/auth" exact>
              <LogIn />
            </Route>

            {/* User Links */}
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
