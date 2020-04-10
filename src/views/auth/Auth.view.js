import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

import authRoutes from './authRoutes';

const Authentication = ({
  match,
  loginUser,
  logoutUser,
  isLoggingIn,
  isLoggedOut,
  registerUser,
  isLoggingOut,
  isRegistering,
  verifyUserEmail,
  isEmailVerified,
  isRegisterSuccess,
  userPasswordReset,
  resendEmailVerification,
}) => {
  return (
    <div key="auth-view" id="auth">
      <div className="auth-wrapper">
        <section className="auth-content">

          <div className="auth-logo">
            <img src="" alt="NetOrc by Wanclouds" height={100} />
          </div>

          <div className="auth-component">
            <Card>
              {authRoutes(
                match,
                loginUser,
                logoutUser,
                isLoggingIn,
                isLoggedOut,
                registerUser,
                isLoggingOut,
                isRegistering,
                verifyUserEmail,
                isEmailVerified,
                isRegisterSuccess,
                userPasswordReset,
                resendEmailVerification,
              )}
            </Card>
          </div>

        </section>
        <footer className="auth-footer">
          Copyright 2018. Wanclouds, Inc.
        </footer>
      </div>
    </div>
  );
};

Authentication.contextTypes = {
  router: PropTypes.object,
};

Authentication.defaultProps = {};

Authentication.propTypes = {
  match: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  isLoggedOut: PropTypes.bool.isRequired,
  isLoggingIn: PropTypes.bool.isRequired,
  isLoggingOut: PropTypes.bool.isRequired,
  registerUser: PropTypes.func.isRequired,
  isRegistering: PropTypes.bool.isRequired,
  isEmailVerified: PropTypes.bool.isRequired,
  verifyUserEmail: PropTypes.func.isRequired,
  isRegisterSuccess: PropTypes.bool.isRequired,
  userPasswordReset: PropTypes.func.isRequired,
  resendEmailVerification: PropTypes.func.isRequired,
};

Authentication.styles = {
  layout: {},
};

export default Authentication;
