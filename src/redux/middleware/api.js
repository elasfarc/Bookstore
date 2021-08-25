const API_CALL_REQUESTED = 'api/requested';
const API_CALL_SUCCESS = 'api/success';
const API_CALL_FAIL = 'api/fail';

const demo = {
  type: API_CALL_REQUESTED,
  payload: {
    url: '',
    onSuccess: '',
  },
};

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== API_CALL_REQUESTED) return next(action);

  next(action);
  const {
    payload: {
      url, method = 'GET', body, onSuccess, onError,
    },
  } = action;
  try {
    const response = await fetch(url, { method }, body);
    const data = await response.json();
    dispatch({ type: API_CALL_SUCCESS, payload: data });
    if (onSuccess) dispatch({ type: onSuccess, payload: data });
  } catch (error) {
    dispatch({ type: API_CALL_FAIL, payload: error.message });
    if (onError) dispatch({ type: onError, payload: error });
  }
};

export default api;
