import * as apiActions from '../api';

// ACTION TYPES
const BOOK_ADDED = 'bookAdded';
const BOOK_REMOVED = 'bookRemoved';
const BOOKS_LOADED = 'books/load';

// ACTION CREATORs

export const addBook = ({ title, author }) => ({
  type: BOOK_ADDED,
  payload: {
    title,
    author,
  },
});

export const loadBooks = () => apiActions.requestAPICall({
  url: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QHPZf1IIMps3KCQX92JD/books',
  onSuccess: BOOKS_LOADED,
});

export const removeBook = (id) => (dispatch, getState) => {
  dispatch(
    apiActions.requestAPICall({
      url: `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QHPZf1IIMps3KCQX92JD/books/${id}`,
      method: 'DELETE',
      body: JSON.stringify({ item_id: id }),
    }),
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
const getBooksReducer = () => {
  let lastID = 0;
  const reducer = (state = initState, action) => {
    const { type, payload } = action;
    if (type === BOOK_ADDED) {
      return [
        ...state,
        {
          // eslint-disable-next-line no-plusplus
          id: ++lastID,
          title: payload.title,
          author: payload.author,
        },
      ];
    }

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
