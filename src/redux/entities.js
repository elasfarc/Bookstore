import { combineReducers } from 'redux';
import booksReducer from './books/book';

export default combineReducers({
  books: booksReducer,
});
