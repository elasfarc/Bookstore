import React from 'react';
import PropTypes from 'prop-types';

const NewBook = ({ addBook }) => {
  const [bookTitle, setBookTitle] = React.useState('');
  const titleInputRef = React.useRef(null);
  const handleInputChange = () => {
    setBookTitle(titleInputRef.current.value);
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    addBook({ title: bookTitle });
    setBookTitle('');
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
            onChange={handleInputChange}
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

NewBook.propTypes = { addBook: PropTypes.func.isRequired };
