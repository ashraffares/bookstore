const intialState = 'All';

const filterReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return state.filter((book) => book.category === action.filterby);
    default: return state;
  }
};

export default filterReducer;
