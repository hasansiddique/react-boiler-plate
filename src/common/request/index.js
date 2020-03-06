import axios from 'axios';
import merge from 'lodash/merge';

import transformKeys from '../transformKeys';

const getHeaders = (headers) => {
  const defaultHeaders = {
    Accept: 'application/vnd.cia.v1+json',
    'Content-Type': 'application/vnd.cia.v1+json',
    Authorization: localStorage.getItem('token'),
  };
  return merge({}, defaultHeaders, headers);
};

const request = {
  get: (url, headers = {}) => {
    return axios({
      method: 'GET',
      url,
      headers: getHeaders(headers),
      transformResponse: axios.defaults.transformResponse
        .concat((data) => transformKeys.toCamelCase(data)),
    });
  },
  post: (url, payload, headers = {}, transform = true) => {
    return axios({
      method: 'POST',
      url,
      data: transform ? transformKeys.toSnakeCase(payload) : payload,
      headers: getHeaders(headers),
      transformResponse: axios.defaults.transformResponse
        .concat((data) => transformKeys.toCamelCase(data)),
    });
  },
  patch: (url, payload, headers = {}, transform = true) => {
    return axios({
      method: 'PATCH',
      url,
      data: transform ? transformKeys.toSnakeCase(payload) : payload,
      headers: getHeaders(headers),
      transformResponse: axios.defaults.transformResponse
        .concat((data) => transformKeys.toCamelCase(data)),
    });
  },
  put: (url, payload, headers = {}, transform = true) => {
    return axios({
      method: 'PUT',
      url,
      data: transform ? transformKeys.toSnakeCase(payload) : payload,
      headers: getHeaders(headers),
      transformResponse: axios.defaults.transformResponse
        .concat((data) => transformKeys.toCamelCase(data)),
    });
  },
  delete: (url, headers = {}) => {
    return axios({
      method: 'DELETE',
      url,
      headers: getHeaders(headers),
      transformResponse: axios.defaults.transformResponse
        .concat((data) => transformKeys.toCamelCase(data)),
    });
  },
};

export default request;
