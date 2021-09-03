import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { RemoveBook } from '../../actions';
import './book.css';

const Book = (props) => {
  const { obj } = props;
  const { id, title, category } = obj;
  const dispatch = useDispatch();
  return (
    <tr key={id} className="card">
      <div className="cardContent">
        <td>{category}</td>
        <td>{title}</td>
        <td>
          <button type="button" onClick={() => dispatch(RemoveBook(obj))}>
            Remove Book
          </button>
        </td>
      </div>
      <div className="flexRow">
        <div className="flexRow">
          <div className="Oval-2" />
          <div className="flexColumn">
            <span>64%</span>
            <span>completed</span>
          </div>
        </div>
        <div>
          button
        </div>
      </div>
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
