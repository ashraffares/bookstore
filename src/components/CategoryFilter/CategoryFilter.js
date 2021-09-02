import React from 'react';

const CategoryFilter = () => (
  <label htmlFor="filter">
    Choose a car:

    <select name="filter" id="filter">
      <option value="All">All</option>
      <option value="Action">Action</option>
      <option value="Biography">Biography</option>
      <option value="History">History</option>
      <option value="Horror">Horror</option>
      <option value="Kids">Kids</option>
      <option value="Learning">Learning</option>
      <option value="Sci-Fi">Sci-Fi</option>
    </select>
  </label>
);

export default CategoryFilter;
