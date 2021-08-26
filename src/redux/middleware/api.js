import * as apiActions from '../api';

// eslint-disable-next-line consistent-return
const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== apiActions.API_CALL_REQUESTED) return next(action);

  next(action);
  const {
    payload: {
      url, method = 'GET', body, onSuccess, onError, onStart,
    },
  } = action;
  if (onStart) dispatch({ type: onStart });
  try {
    let response = await fetch(url, {
      method,
      body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (method === 'GET') response = await response.json();
    dispatch(apiActions.onAPICallSuccess());
    if (onSuccess) {
      if (onSuccess.type === apiActions.API_CALL_REQUESTED) dispatch(onSuccess);
      else dispatch({ type: onSuccess, payload: response });
    }
  } catch (error) {
    dispatch(apiActions.onAPICallFail(error.message));
    if (onError) dispatch({ type: onError, payload: error });
  }
};
export default api;
