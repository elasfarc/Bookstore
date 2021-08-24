// ACTION TYPES
const BOOK_ADDED = 'bookAdded';
const BOOK_REMOVED = 'bookRemoved';

// ACTION CREATORs

export const addBook = ({ title, author }) => ({
  type: BOOK_ADDED,
  payload: {
    title,
    author,
  },
});
export const removeBook = (id) => ({
  type: BOOK_REMOVED,
  payload: {
    id,
  },
});

// REDUCER
const initState = [
  { id: 1e5, title: 'BOOK#1', author: 'some author' },
  { id: 2e5, title: 'BOOK#2', author: 'some author' },
  { id: 3e5, title: 'BOOK#3', author: 'some author' },
  { id: 4e5, title: 'BOOK#4', author: 'some author' },
];
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
    if (type === BOOK_REMOVED)
      return state.filter((book) => book.id !== payload.id);

    return state;
  };
  return reducer;
};

export default getBooksReducer;
