import { combineReducers } from 'redux';
import getBooksReducer from './books/book';

const booksReducer = getBooksReducer();
export default combineReducers({
  books: booksReducer,
});
