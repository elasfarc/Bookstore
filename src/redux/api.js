// ACTION TYPES
export const API_CALL_REQUESTED = 'api/requested';
export const API_CALL_SUCCESS = 'api/success';
export const API_CALL_FAIL = 'api/fail';

// ACTION TYPES
export const requestAPICall = (payload) => ({
  type: API_CALL_REQUESTED,
  payload,
});

export const onAPICallSuccess = (payload) => ({
  type: API_CALL_SUCCESS,
  payload,
});

export const onAPICallFail = (payload) => ({
  type: API_CALL_FAIL,
  payload,
});
