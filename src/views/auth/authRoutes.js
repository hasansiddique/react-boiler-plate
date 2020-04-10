import React from 'react';
import { Route } from 'react-router-dom';

import Login from './views/Login';
import Logout from './views/Logout';
import Register from './views/Register';
import ResendEmail from './views/ResendEmail';
import ForgotPassword from './views/ForgotPassword';
import EmailVerification from './views/EmailVerification';

const AuthRoutes = ({
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
}) => [
  <Route
    exact
    path={['/', '/user', '/user/login']}
    render={() => {
      return (
        <Login
          handleSubmit={loginUser}
          isLoggingIn={isLoggingIn}
        />
      );
    }}
  />,
  <Route
    exact
    path="/user/register"
    render={() => {
      return (
        <Register
          handleSubmit={registerUser}
          isRegistering={isRegistering}
          isRegisterSuccess={isRegisterSuccess}
        />
      );
    }}
  />,
  <Route
    exact
    path="/user/logout"
    render={() => {
      return (
        <Logout
          logoutUser={logoutUser}
          isLoggedOut={isLoggedOut}
          isLoggingOut={isLoggingOut}
        />
      );
    }}
  />,
  <Route
    exact
    path="/user/verify/:token"
    render={() => {
      return (
        <EmailVerification
          match={match}
          verifyUserEmail={verifyUserEmail}
          isEmailVerified={isEmailVerified}
        />
      );
    }}
  />,
  <Route
    exact
    path="/user/forgot-password"
    render={() => {
      return (
        <ForgotPassword
          isLoggingIn={isLoggingIn}
          handleSubmit={userPasswordReset}
        />
      );
    }}
  />,
  <Route
    path="/user/resend-email"
    render={() => {
      return (
        <ResendEmail
          handleSubmit={resendEmailVerification}
          isLoggingIn={isLoggingIn}
        />
      );
    }}
  />,
];

export default AuthRoutes;
