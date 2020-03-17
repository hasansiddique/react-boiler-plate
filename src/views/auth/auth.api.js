import request from '../../common/request';
import storage from '../../common/storage';
import { FETCHING, HTTP_STATUS } from '../../common/constants';
import transformKeys from '../../common/transformKeys';
import {
  requestUserLogin,
  userLoginSuccess,
  userLoginFailure,
} from './auth.actions';

export const loginUser = (payload) => {
  return async (dispatch) => {
    dispatch(requestUserLogin(FETCHING));

    try {
      const res = await request.post('/v1/users/login', payload);

      dispatch(userLoginSuccess(transformKeys.toCamelCase(res.data || {})));
      storage.set('user', JSON.stringify(res.data));

      return res;
    } catch (err) {
      dispatch(userLoginFailure(err));
      if (err.response.status === HTTP_STATUS.FORBIDDEN) {
        window.logout();
        return null;
      }

      return null;
    }
  };
};
