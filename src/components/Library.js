import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import NewBook from './AddNewBook';
import './Library.css';

const Library = () => {
  const books = useSelector((state) => state.entities.books);
  return (
    <div className="library">
      <ul>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
      <NewBook />
    </div>
  );
};

export default Library;
