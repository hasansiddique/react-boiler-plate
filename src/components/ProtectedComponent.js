import React from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import storage from '../common/storage';

const ProtectedComponent = ({ Component, isAuthenticated }) => (
  <Route
    render={() => (
      (isAuthenticated || get(storage.get('user'), 'token'))
        ? <Component />
        : <Redirect to="/user" />
    )}
  />
);

ProtectedComponent.defaultProps = {
  isAuthenticated: false,
};

ProtectedComponent.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  isAuthenticated: PropTypes.bool,
};

export default ProtectedComponent;
