// import React from 'react';
// import {Redirect, Route} from 'react-router-dom';

// import auth from '../util/auth';

// /* Types */
// type PrivateRouteProps = {
//     children: React.ReactNode;
//     path: string;
//     exact: boolean;
// };

// const PrivateRoute = (props: PrivateRouteProps) => {
//   const hasToken = auth.getToken() !== null;
//   const redirectPath = hasToken ? props.path : auth.AUTH_ENDPOINT;

//   if (hasToken) {
//     return (
//       <Route path={redirectPath} exact={props.exact}>
//         {props.children}
//       </Route>
//     );
//   }

//   const comp = () => <Redirect to={{pathname: redirectPath}} />;
//   return (
//     <Route
//       path={redirectPath}
//       exact={props.exact}
//       component={comp}
//       render={undefined}
//     />
//   );
// };

// export default PrivateRoute;
export {};
