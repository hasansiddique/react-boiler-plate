import { connect } from 'react-redux';

import Auth from './Auth.view';
import { loginUser } from './auth.api';

const mapStateToProps = (state) => ({
  user: state.getIn(['auth', 'user']),
  error: state.getIn(['auth', 'error']),
  requestingLogin: state.getIn(['auth', 'requestingLogin']),
  isAuthenticated: state.getIn(['auth', 'isAuthenticated']),
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (payload) => {
    dispatch(loginUser((payload)));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
