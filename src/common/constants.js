export const AUTH_STATE = {
  INIT: 0,
  AUTHENTICATED: 1,
  FAILURE: 2,
};
export const AUTH_RETRIES = 3;

export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ACTIVE = 'ACTIVE';
export const INACTIVE = 'INACTIVE';
export const DELETED = 'DELETED';
export const DELETING = 'DELETING';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const PENDING = 'PENDING';
export const NEW = 'NEW';
export const CREATING = 'CREATING';
export const CREATED = 'CREATED';
export const UNAUTHORIZED = 'UNAUTHORIZED';
export const MAINTENANCE_MODE = 'MAINTENANCE_MODE';
export const CANCELED = 'CANCELED';

export const EMAIL_VERIFYING = 'EMAIL_VERIFYING';
export const EMAIL_VERIFIED = 'EMAIL_VERIFIED';
export const EMAIL_VERIFICATION_CONFLICT = 'EMAIL_VERIFICATION_CONFLICT';

export const AUTH_ROUTES = ['/', '/user', '/user/login', '/user/register', '/user/logout', '/user/forgot-password', '/user/reset-password', '/user/verify/:token'];

export const POLL_OPERATION = {
  SVC_CREATE: 'SVC_CREATE',
  SVC_UPDATE: 'SVC_UPDATE',
  SVC_DELETE: 'SVC_DELETE',
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTRY: 422,
  INTERNAL_SERVER_ERROR: 500,
};

export const HTTP_MESSAGE = {
  200: 'OK',
  201: 'Created',
  400: 'Bad Request',
  401: 'Unauthorized',
  402: 'Payment Required',
  403: 'Forbidden',
  404: 'Not Found',
  409: 'Conflict',
  422: 'Unprocessable Entity',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
};

// Notification status
export const STATUS_OK = 'ok';
export const STATUS_WARNING = 'warning';
export const STATUS_ERROR = 'error';
export const STATUS_INFO = 'info';
export const ALERT_SUCCESS = 'Success';
export const ALERT_ERROR = 'Error';
export const TIME_TO_LIVE = 5000;
export const ERROR_TIME_TO_LIVE = 20000;

// polling Interval
export const POLLING_INTERVAL = 8000;
export const MONGO_CREATE_POLLING_DURATION = '%MONGO_CREATE_POLLING_DURATION%';
export const AWS_DELETE_POLLING_TIMEOUT_INTERVAL = '%AWS_DELETE_POLLING_TIMEOUT_INTERVAL%'; // 20 minutes in ms
export const AWS_DELETE_POLLING_INTERVAL = '%AWS_DELETE_POLLING_INTERVAL%'; // 4 seconds in ms
export const AWS_POLLING_TIMEOUT_INTERVAL = '%AWS_POLLING_TIMEOUT_INTERVAL%'; // 28 seconds in ms
export const AWS_POLLING_INTERVAL = '%AWS_POLLING_INTERVAL%'; // 5 minutes in ms
export const RESOURCE_POLLING_TIMEOUT_INTERVAL = '%RESOURCE_POLLING_TIMEOUT_INTERVAL%'; // 3 minutes in ms
export const RESOURCE_POLLING_INTERVAL = '%RESOURCE_POLLING_INTERVAL%'; // 8s in ms

export const COST_NOT_AVAILABLE = '$0';
export const TEXT_NOT_AVAILABLE = '';

export const YES = 'Yes';
export const NO = 'No';

export const REQUEST_STATE = {
  READY: 'READY',
  PROGRESS: 'PROGRESS',
  FAILURE: 'FAILURE',
  SUCCESS: 'SUCCESS',
};
