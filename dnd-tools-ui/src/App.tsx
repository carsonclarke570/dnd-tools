import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/dashboard';
import RaceList from './pages/races';
import Auth from './pages/auth/GoogleAuthCallback';
import LogIn from './pages/auth/LogIn';

import Theme from './Theme';

const App = () => {
  return (
    <Theme>
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
    </Theme>
  );
};

export default App;
