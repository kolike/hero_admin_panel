const initialState = {
  activeFilter: 'all',
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'HEROES_FILTER_APPLYING':
      return {
        ...state,
        activeFilter: action.payload,
      };

    default:
      return state;
  }
};

export default filters;
