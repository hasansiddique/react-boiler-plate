import { combineReducers } from 'redux-immutable';

import user from '../views/user/user.reducer';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
