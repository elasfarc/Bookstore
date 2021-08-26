import './Book.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/books/book';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div className="book flex container">
      <div className="book--content">
        <p className="book--title">{book.title}</p>
        <p className="book--category">{book.category}</p>
      </div>
      <div className="book--control">
        <button
          type="button"
          className="btn"
          onClick={() => dispatch(actions.removeBook(book.id))}
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
