import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/books/book';
import './AddNewBook.css';

const NewBook = () => {
  const [bookTitle, setBookTitle] = React.useState('');
  const [bookCategory, setBookAuthor] = React.useState('');
  const [error, setError] = React.useState({});
  const titleInputRef = React.useRef(null);
  const categoryInputRef = React.useRef(null);
  const dispatch = useDispatch();

  const resetInputs = () => {
    setBookAuthor('');
    setBookTitle('');
  };

  const isInputError = (txt) => {
    const isWhiteSpace = txt.trim() === '';
    return Boolean(isWhiteSpace);
  };

  const handleInputChange = (ref) => {
    const {
      current: { value },
      current: { name },
    } = ref;
    if (name === 'bookTitleInput') setBookTitle(value);
    else if (name === 'bookCategoryInput') setBookAuthor(value);
  };

  const handleInputBlur = (ref) => {
    const {
      current: { value },
      current: { name },
    } = ref;

    if (isInputError(value)) {
      setError((prevState) => ({
        ...prevState,
        [name]: `${name} can not be embty`,
      }));
    } else setError((prevState) => ({ ...prevState, [name]: '' }));
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(actions.addBook({ title: bookTitle, category: bookCategory }));
    resetInputs();
  };

  return (
    <div className="add-new-book">
      <div className="">
        <h4 className="add-new-book--heading">add new book</h4>
        <form className="flex space-between" onSubmit={handleSumbit}>
          <input
            className="grow"
            name="bookTitleInput"
            type="text"
            placeholder="Book title"
            ref={titleInputRef}
            value={bookTitle}
            onChange={() => handleInputChange(titleInputRef)}
            onBlur={() => handleInputBlur(titleInputRef)}
          />
          <input
            className="grow"
            name="bookCategoryInput"
            type="text"
            placeholder="Category"
            ref={categoryInputRef}
            value={bookCategory}
            onChange={() => handleInputChange(categoryInputRef)}
            onBlur={() => handleInputBlur(categoryInputRef)}
          />
          <button
            disabled={Boolean(
              !(titleInputRef.current?.value && categoryInputRef.current?.value)
            )}
            className="btn grow"
            type="submit"
          >
            {' '}
            add book
          </button>
        </form>
        {Object.values(error).some(Boolean) ? (
          <div className="errors">
            {Object.values(error)
              .filter(Boolean)
              .map((err) => (
                <li key={err}>{err}</li>
              ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NewBook;
