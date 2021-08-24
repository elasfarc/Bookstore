const Library = () => {
  const books = [
    { id: 1, title: 'BOOK#1', author: 'some author' },
    { id: 2, title: 'BOOK#2', author: 'some author' },
    { id: 3, title: 'BOOK#3', author: 'some author' },
    { id: 4, title: 'BOOK#4', author: 'some author' },
  ];

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
};

export default Library;
