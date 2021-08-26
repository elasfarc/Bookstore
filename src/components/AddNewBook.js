import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/books/book';

const NewBook = () => {
  const [bookTitle, setBookTitle] = React.useState('');
  const [bookCategory, setBookAuthor] = React.useState('');
  const titleInputRef = React.useRef(null);
  const categoryInputRef = React.useRef(null);
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
    else if (name === 'bookCategoryInput') setBookAuthor(value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(actions.addBook({ title: bookTitle, category: bookCategory }));
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
            name="bookCategoryInput"
            type="text"
            placeholder="Category"
            ref={categoryInputRef}
            value={bookCategory}
            onChange={() => handleInputChange(categoryInputRef)}
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
