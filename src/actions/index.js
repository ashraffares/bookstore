export const CreateBook = (obj) => ({
  type: 'CREATE_BOOK',
  obj,
});

export const RemoveBook = (obj) => ({
  type: 'REMOVE_BOOK',
  obj,
});

export const ChangeFilter = (obj) => ({
  type: 'CHANGE_FILTER',
  obj,
});
