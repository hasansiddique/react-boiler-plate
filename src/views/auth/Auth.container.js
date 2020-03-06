import { connect } from 'react-redux';

import Auth from './Auth.view';

import { getUser } from '../user/user.action';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  getUser: (payload) => dispatch(getUser(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
