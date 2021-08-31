import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../../components/book/index';

const BooksList = () => {
  const [Books] = useState(useSelector(((state) => state)));
  const handleRemoveBook = (id) => {
    useDispatch({
      type: 'REMOVE_BOOK',
      id,
    });
  };

  return (
    <table>
      <tbody>
        {Books.map((book) => (
          <>
            <Book obj={book} key={book.id} />
            <button type="button" id={book.id} onClick={() => handleRemoveBook(book.id)}>Remove Book</button>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default BooksList;
