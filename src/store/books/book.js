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
  type: BOOK_ADDED,
  payload: {
    id,
  },
});

// REDUCER
const getBooksReducer = () => {
  let lastID = 0;
  const reducer = (state = [], action) => {
    // console.log(lastID, state, action);
    const { type, payload } = action;
    if (type === BOOK_ADDED) {
      return [
        ...state,
        {
          id: ++lastID,
          title: payload.title,
          author: payload.author,
        },
      ];
    }
    if (type === BOOK_REMOVED) return state.filter((book) => book.id !== payload.id);

    return state;
  };
  return reducer;
};

export default getBooksReducer;
