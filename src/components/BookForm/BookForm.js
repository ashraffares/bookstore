import { useState } from "react";

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChagneCategory = (e) => setCategory(e.target.value);

  return (
    <form>
      <input type="text" onChange={(e) => handleChangeTitle(e)} />
      <label htmlFor="category">
        Choose a category:
        <select name="category" id="category" onChange={(e) => handleChagneCategory(e)}>
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
}

export default BookForm;
