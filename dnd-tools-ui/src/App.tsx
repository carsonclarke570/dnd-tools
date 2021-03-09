import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/dashboard';
import RaceList from './pages/races';
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
            <PrivateRoute path="/dashboard" exact>
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/races" exact>
              <RaceList />
            </PrivateRoute>
          </Switch>
        </Navigation>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
