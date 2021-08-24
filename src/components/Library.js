import React from 'react';
import Book from './Book';
const availableBooks = [
  { id: 1, title: 'BOOK#1', author: 'some author' },
  { id: 2, title: 'BOOK#2', author: 'some author' },
  { id: 3, title: 'BOOK#3', author: 'some author' },
  { id: 4, title: 'BOOK#4', author: 'some author' },
];
const Library = () => {
  const [books, setBooks] = React.useState(availableBooks);
  const removeBook = (bookID) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookID));
  };
  return (
    <div className="library">
      <ul>
        {books.map((book) => (
          <Book key={book.id} book={book} removeBook={removeBook} />
        ))}
      </ul>
    </div>
  );
};

export default Library;
