import { Map } from 'immutable';
import { createReducer } from 'redux-act';
import {
  requestUserLogin,
  userLoginSuccess,
  userLoginFailure,
} from './auth.actions';
import { FAILURE, FETCHING, SUCCESS } from '../../common/constants';

const defaultState = Map({
  user: null,
  error: null,
  requestingLogin: '',
  isAuthenticated: false,
});

const reducer = createReducer({
  [requestUserLogin]: (state) => {
    return state
      .set('user', null)
      .set('error', null)
      .set('isAuthenticated', false)
      .set('requestingLogin', FETCHING);
  },

  [userLoginSuccess]: (state, action) => {
    return state
      .set('user', action.user)
      .set('error', null)
      .set('isAuthenticated', true)
      .set('requestingLogin', SUCCESS);
  },

  [userLoginFailure]: (state, action) => {
    return state
      .set('user', null)
      .set('error', action.err)
      .set('isAuthenticated', false)
      .set('requestingLogin', FAILURE);
  },

}, defaultState);

export default reducer;
