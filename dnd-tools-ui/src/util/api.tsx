import axios, {AxiosRequestConfig} from 'axios';

import auth from './auth';

/* Constants */
const API_ROOT = 'http://localhost:1337';

const api = {

  API_URL: API_ROOT,

  graphqlQuery(query: string) {
    const token = auth.getToken();
    const request: AxiosRequestConfig = {
      url: API_ROOT + '/graphql',
      method: 'post',
      data: {
        query: query,
      },
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    };

    return axios(request);
  },
};

export default api;
