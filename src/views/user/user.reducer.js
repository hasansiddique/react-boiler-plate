import { Map } from 'immutable';
import { createReducer } from 'redux-act';
import {
  receivedUser,
  requestingUser,
} from './user.action';

const defaultState = Map({
  user: null,
  requestingUser: false,
});

const reducer = createReducer({
  [requestingUser]: (state, action) => {
    return state.set('requestingUser', action.status);
  },

  [receivedUser]: (state, action) => {
    return state
      .set('user', action.user);
  },

}, defaultState);

export default reducer;
