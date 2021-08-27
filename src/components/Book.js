import './Book.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/books/book';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div class="book">
      <div class="flex space-between cross-center">
        <div class="flex direction-col grow">
          <div class="book--info">
            <p class="book--category">action</p>
            <h4 class="book--title">the hunger games</h4>
            <p class="book--author">suzanne collins</p>
          </div>
          <div class="book--control flex gap-2">
            <a href="" class="btn btn__book-ctrl vertical-pipe">
              comment
            </a>
            <a href="" class="btn btn__book-ctrl vertical-pipe">
              remove
            </a>
            <a href="" class="btn btn__book-ctrl">
              edit
            </a>
          </div>
        </div>
        <div class="book--status flex cross-center gap-3">
          <div class="book--progress flex cross-center gap-1 vertical-pipe">
            <div class="book--progress--chart"></div>
            <div class="book--progress--plain">
              64% <span>completed</span>
            </div>
          </div>
          <div class="book--current-state">
            <p class="book--current-chp">current chapter</p>
            <p class="book--current-chp-name">chapter 17</p>
            <a href="" class="btn btn__book-state">
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
