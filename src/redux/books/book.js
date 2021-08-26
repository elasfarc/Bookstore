import { v4 as uuidv4 } from 'uuid';
import * as apiActions from '../api';

// ACTION TYPES

const BOOK_REMOVED = 'bookRemoved';
const BOOKS_LOADED = 'books/load';

// ACTION CREATORs

export const loadBooks = () =>
  apiActions.requestAPICall({
    url: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QHPZf1IIMps3KCQX92JD/books',
    onSuccess: BOOKS_LOADED,
  });

export const removeBook = (id) => (dispatch) => {
  dispatch(
    apiActions.requestAPICall({
      url: `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QHPZf1IIMps3KCQX92JD/books/${id}`,
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

export const addBook = ({ title, category }) =>
  apiActions.requestAPICall({
    url: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QHPZf1IIMps3KCQX92JD/books/',
    body: JSON.stringify({ item_id: uuidv4(), title, category }),
    method: 'POST',
    onSuccess: loadBooks(),
  });

// REDUCER
const initState = {
  list: [],
  loading: false,
  lastFetch: null,
};
const getBooksReducer = () => {
  const lastID = 0;
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
  return reducer;
};

export default getBooksReducer;
