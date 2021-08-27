import './Book.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/books/book';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div className="book">
      <div className="flex space-between cross-center">
        <div className="flex direction-col grow">
          <div className="book--info">
            <p className="book--category">{book.category}</p>
            <h4 className="book--title">{book.title}</h4>
            <p className="book--author">suzanne collins</p>
          </div>
          <div className="book--control flex gap-2">
            <a href="#" className="btn btn__book-ctrl vertical-pipe">
              comment
            </a>
            <button
              type="button"
              className="btn btn__book-ctrl vertical-pipe"
              onClick={() => dispatch(actions.removeBook(book.id))}
            >
              remove
            </button>
            <a href="#" className="btn btn__book-ctrl">
              edit
            </a>
          </div>
        </div>
        <div className="book--status flex cross-center gap-3">
          <div className="book--progress flex cross-center gap-1 vertical-pipe">
            <div className="book--progress--chart" />
            <div className="book--progress--plain">
              64%
              <span>completed</span>
            </div>
          </div>
          <div className="book--current-state">
            <p className="book--current-chp">current chapter</p>
            <p className="book--current-chp-name">chapter 17</p>
            <a href="" className="btn btn__book-state">
              update progress
            </a>
          </div>
        </div>
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
