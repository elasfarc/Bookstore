import * as apiActions from '../api';

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== apiActions.API_CALL_REQUESTED) return next(action);

  next(action);
  const {
    payload: {
      url, method = 'GET', body, onSuccess, onError,
    },
  } = action;
  try {
    const response = await fetch(url, { method }, body);
    const data = await response.json();
    dispatch(apiActions.onAPICallSuccess());
    if (onSuccess) dispatch({ type: onSuccess, payload: data });
  } catch (error) {
    dispatch(apiActions.onAPICallFail(error.message));
    if (onError) dispatch({ type: onError, payload: error });
  }
};
export default api;
