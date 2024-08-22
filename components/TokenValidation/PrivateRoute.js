import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../authentication/loginComponents/AuthContext'; // Adjust the path as needed

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
