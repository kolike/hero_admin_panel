import { v4 as uuidv4 } from 'uuid';
const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
};

const heroes = (state = initialState, action) => {
  switch (action.type) {
    case 'HEROES_FETCHING':
      return {
        ...state,
        heroesLoadingStatus: 'loading',
      };
    case 'HEROES_FETCHED':
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: 'idle',
      };
    case 'HEROES_FETCHING_ERROR':
      return {
        ...state,
        heroesLoadingStatus: 'error',
      };
    case 'HERO_DELETING':
      return {
        ...state,
        heroes: state.heroes.filter((elem) => elem.id !== action.payload),
      };
    case 'HERO_ADDING':
      const newHero = {
        ...action.payload,
        id: uuidv4(),
      };

      fetch('http://localhost:3001/heroes/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newHero),
      });

      return {
        ...state,
        heroes: [...state.heroes, newHero],
      };

    default:
      return state;
  }
};

export default heroes;
