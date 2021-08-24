import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as actions from '../store/books/book';

const NewBook = () => {
  const [bookTitle, setBookTitle] = React.useState('');
  const [bookAuthor, setBookAuthor] = React.useState('');
  const titleInputRef = React.useRef(null);
  const authorInputRef = React.useRef(null);
  const dispatch = useDispatch();

  const resetInputs = () => {
    setBookAuthor('');
    setBookTitle('');
  };

  const handleInputChange = (ref) => {
    const {
      current: { value },
      current: { name },
    } = ref;
    if (name === 'bookTitleInput') setBookTitle(value);
    else if (name === 'bookAuthorInput') setBookAuthor(value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(actions.addBook({ title: bookTitle, author: bookAuthor }));
    resetInputs();
  };

  return (
    <div className="add-new-book">
      <div className="container">
        <h4>add new book</h4>
        <form onSubmit={handleSumbit}>
          <input
            name="bookTitleInput"
            type="text"
            placeholder="Book title"
            ref={titleInputRef}
            value={bookTitle}
            onChange={() => handleInputChange(titleInputRef)}
          />
          <input
            name="bookAuthorInput"
            type="text"
            placeholder="Author name"
            ref={authorInputRef}
            value={bookAuthor}
            onChange={() => handleInputChange(authorInputRef)}
          />
          <button className="btn" type="submit">
            {' '}
            add book
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewBook;
