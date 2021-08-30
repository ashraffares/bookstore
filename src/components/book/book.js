const Book = (obj) => {
  const { id, title, category } = obj;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

export default Book;
