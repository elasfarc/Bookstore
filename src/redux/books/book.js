import { v4 as uuidv4 } from 'uuid';
import * as apiActions from '../api';
import apiConfig from '../../services/api/provider';

const { booksEndpoint: url } = apiConfig;
// ACTION TYPES

const BOOK_REMOVED = 'bookRemoved';
const BOOKS_LOADED = 'books/load';

// ACTION CREATORs

export const loadBooks = () =>
  apiActions.requestAPICall({
    url,
    onSuccess: BOOKS_LOADED,
  });

export const addBook = ({ title, category }) =>
  apiActions.requestAPICall({
    url,
    body: JSON.stringify({ item_id: uuidv4(), title, category }),
    method: 'POST',
    onSuccess: loadBooks(),
  });
export const removeBook = (id) => (dispatch) => {
  dispatch(
    apiActions.requestAPICall({
      url: `${url}/${id}`,
      method: 'DELETE',
      body: JSON.stringify({ item_id: id }),
    })
  );
  dispatch({
    type: BOOK_REMOVED,
    payload: {
      id,
    },
  });
};

// REDUCER
const initState = {
  list: [],
  loading: false,
  lastFetch: null,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;

  if (type === BOOK_REMOVED) {
    return {
      ...state,
      list: state.list.filter((book) => book.id !== payload.id),
    };
  }

  if (type === BOOKS_LOADED) {
    return {
      ...state,
      loading: false,
      list: Object.entries(payload).map(([id, [{ title, category }]]) => ({
        id,
        title,
        category,
      })),
    };
  }

  return state;
};

export default reducer;
