import { createAction } from 'redux-act';

export const requestUserLogin = createAction();
export const userLoginSuccess = createAction((user) => ({ user }));
export const userLoginFailure = createAction((err) => ({ err }));
