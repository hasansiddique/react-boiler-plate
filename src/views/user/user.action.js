import { createAction } from 'redux-act';

import request from '../../common/request/index';
import { HTTP_STATUS } from '../../common/constants';
import transformKeys from '../../common/transformKeys/index';

export const receivedUser = createAction((user) => ({ user }));
export const requestingUser = createAction((status) => ({ status }));

export const getUser = (payload) => {
  return async (dispatch) => {
    try {
      const res = await request.post('/api/authenticate', payload);

      // This is to support the old API
      if (res.data && !res.data.firstName) {
        res.data = {
          ...res.data,
          firstName: res.data.info.firstName,
          lastName: res.data.info.lastName,
          department: {
            id: res.data.info.departmentId,
          },
          info: {
            ...res.data.info,
            groups: res.data.info.adgroups,
          },
        };
      }

      dispatch(receivedUser(transformKeys.toCamelCase(res.data || {})));

      localStorage.setItem('user', JSON.stringify(res.data));

      return res;
    } catch (err) {
      if (err.response.status === HTTP_STATUS.FORBIDDEN) {
        window.logout();
        return null;
      }

      return null;
    }
  };
};
