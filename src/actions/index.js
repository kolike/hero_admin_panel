export const fetchHeroes = (request) => (dispatch) => {
  dispatch(heroesFetching());
  request('http://localhost:3001/heroes')
    .then((data) => dispatch(heroesFetched(data)))
    .catch(() => dispatch(heroesFetchingError()));
};

export const heroesFetching = () => {
  return {
    type: 'HEROES_FETCHING',
  };
};

export const heroesFetched = (heroes) => {
  return {
    type: 'HEROES_FETCHED',
    payload: heroes,
  };
};

export const heroesFetchingError = () => {
  return {
    type: 'HEROES_FETCHING_ERROR',
  };
};
export const heroesDeleting = (id) => {
  return {
    type: 'HERO_DELETING',
    payload: id,
  };
};
export const heroAdding = (newHero) => {
  return {
    type: 'HERO_ADDING',
    payload: newHero,
  };
};
// export const heroesFilterApplying = (element) => (dispatch) => {
//   setTimeout(() => {
//     dispatch({
//       type: 'HEROES_FILTER_APPLYING',
//       payload: element,
//     });
//   }, 1000);
// };

export const heroesFilterApplying = (element) => {
  return {
    type: 'HEROES_FILTER_APPLYING',
    payload: element,
  };
};
