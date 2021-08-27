import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import NewBook from './AddNewBook';
import './Library.css';
import * as actions from '../redux/books/book';

const Library = () => {
  const { list: books, loading: isLoading } = useSelector(
    (state) => state.entities.books
  );

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(actions.loadBooks());
  }, []);

  return (
    <div className="library container">
      {isLoading ? (
        <h1 className="loading">LOADING...</h1>
      ) : (
        <ul className="list-group">
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </ul>
      )}

      <NewBook />
    </div>
  );
};

export default Library;
