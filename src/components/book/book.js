/* eslint-disable no-console */
import propTypes from 'prop-types';

const Book = (props) => {
  const { obj } = props;
  const { id, title, category } = obj;
  console.log(obj);
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  obj: propTypes.shape({
    id: propTypes.number,
    title: propTypes.string,
    category: propTypes.string,
  }).isRequired,
};
export default Book;
