import { connect } from 'react-redux';

import Auth from './Auth.view';
import {
  loginUser,
  logoutUser,
  registerUser,
  verifyUserEmail,
  userPasswordReset,
  resendEmailVerification,
} from './auth.api';

const mapStateToProps = (state) => ({
  user: state.getIn(['auth', 'user']),
  error: state.getIn(['auth', 'error']),
  isLoggingIn: state.getIn(['auth', 'isLoggingIn']),
  isLoggedOut: state.getIn(['auth', 'isLoggedOut']),
  isLoggingOut: state.getIn(['auth', 'isLoggingOut']),
  isRegistering: state.getIn(['auth', 'isRegistering']),
  isEmailVerified: state.getIn(['auth', 'isEmailVerified']),
  requestingLogin: state.getIn(['auth', 'requestingLogin']),
  isRegisterSuccess: state.getIn(['auth', 'isRegisterSuccess']),
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => {
    dispatch(logoutUser());
  },
  loginUser: (payload) => {
    dispatch(loginUser((payload)));
  },
  registerUser: (payload) => {
    dispatch(registerUser(payload));
  },
  verifyUserEmail: (token) => {
    dispatch(verifyUserEmail(token));
  },
  userPasswordReset: (token) => {
    dispatch(userPasswordReset(token));
  },
  resendEmailVerification: (token) => {
    dispatch(resendEmailVerification(token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
