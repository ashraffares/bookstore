import { useState } from 'react';
import { useDispatch } from 'react-redux';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChagneCategory = (e) => setCategory(e.target.value);
  const handleSubmit = () => {
    useDispatch({
      type: 'CREATE_BOOK',
      book: {
        title,
        category,
      },
    });
  };

  return (
    <form onSubmit={() => handleSubmit()}>
      <input type="text" onChange={(e) => handleChangeTitle(e)} value={title} />
      <label htmlFor="category">
        Choose a category:
        <select name="category" id="category" onChange={(e) => handleChagneCategory(e)} value={category}>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Kids">Kids</option>
          <option value="Learning">Learning</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookForm;
