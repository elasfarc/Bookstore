import './Book.css';
const Book = ({ book, removeBook }) => {
  return (
    <div className="book flex">
      <div className="book--content">
        <p className="book--title">{book.title}</p>
        <p className="book--author">{book.author}</p>
      </div>
      <div className="book--control">
        <button className="btn" onClick={() => removeBook(book.id)}>
          remove
        </button>
      </div>
    </div>
  );
};

export default Book;
