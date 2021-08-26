import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import NewBook from './AddNewBook';
import './Library.css';
import * as actions from '../redux/books/book';

const Library = () => {
  let books = useSelector((state) => state.entities.books.list);
  let loading = useSelector((state) => state.entities.books.loading);
  const dispatch = useDispatch();
  React.useEffect(() => {
    books = dispatch(actions.loadBooks());
  }, []);

  console.warn(books);
  return (
    <div className="library">
      {loading ? (
        <h1 className="loading">LOADING...</h1>
      ) : (
        <ul>
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
