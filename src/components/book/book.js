/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */

import propTypes from 'prop-types';

const Book = (book, key) => {
  const { obj } = book;
  const { id, title, category } = obj;
  return (
    <tr>
      <td id={key}>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  book: propTypes.object.isRequired,
  key: propTypes.string.isRequired,
};

export default Book;
