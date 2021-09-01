import propTypes from 'prop-types';
import { REMOVE_BOOK } from '../../actions';
import store from '../../reducers';

const Book = (props) => {
  const { obj } = props;
  const { id, title, category } = obj;

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button type="button" onClick={() => store.dispatch(REMOVE_BOOK(obj))}>
          Remove Book
        </button>
      </td>
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
