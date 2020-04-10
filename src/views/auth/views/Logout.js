import { withRouter, Redirect } from 'react-router-dom';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

import storage from '../../../common/storage';

const Logout = ({ isLoggedOut, isLoggingOut, logoutUser }) => {
  useEffect(() => {
    if (storage.get('user')) {
      logoutUser();
    }
  });

  return (
    <>
      {isLoggingOut && <Spin text="Logging Out..." style={{ marginTop: '50px' }} />}
      {isLoggedOut && <Redirect to="/user/login" />}
    </>
  );
};

Logout.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  isLoggedOut: PropTypes.bool.isRequired,
  isLoggingOut: PropTypes.bool.isRequired,
};
export default withRouter(Logout);
