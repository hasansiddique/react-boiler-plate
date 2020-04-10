import { connect } from 'react-redux';

import TopBar from './Topbar.view';
import { logoutUser } from '../../auth/auth.api';

const mapStateToProps = (state) => ({
  user: state.getIn(['auth', 'user']),
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => {
    dispatch(logoutUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
