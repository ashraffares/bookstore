const CREATE_BOOK = (obj) => ({
  type: 'CREATE_BOOK',
  obj,
});

const REMOVE_BOOK = (obj) => ({
  type: 'REMOVE_BOOK',
  obj,
});

export default {
  CREATE_BOOK,
  REMOVE_BOOK,
};
