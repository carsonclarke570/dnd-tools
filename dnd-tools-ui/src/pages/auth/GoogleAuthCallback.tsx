import React, {useEffect} from 'react';
import {useLocation, Redirect} from 'react-router-dom';
import axios from 'axios';

import auth from '../../util/auth';

const GoogleAuthCallback = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location) {
      return;
    }

    const {search} = location;
    axios({
      method: 'GET',
      url: `http://localhost:1337/auth/google/callback?${search}`,
    }).then((res) => {
      return res.data;
    }).then((res) => {
      auth.setToken(res.jwt);
      auth.setUserInfo(res.user);
    });
  }, [location]);

  return (
    <Redirect to='/'/>
  );
};

export default GoogleAuthCallback;
