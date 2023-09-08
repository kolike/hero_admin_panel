// import { createAction } from '@reduxjs/toolkit';
import {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
} from '../components/heroesList/heroesSlice';

export const fetchHeroes = (request) => (dispatch) => {
  dispatch(heroesFetching());
  request('http://localhost:3001/heroes')
    .then((data) => dispatch(heroesFetched(data)))
    .catch(() => dispatch(heroesFetchingError()));
};

// // export const heroesFetching = () => {
// //   return {
// //     type: 'HEROES_FETCHING',
// //   };
// // };

// export const heroesFetching = createAction('HEROES_FETCHING');

// // export const heroesFetched = (heroes) => {
// //   return {
// //     type: 'HEROES_FETCHED',
// //     payload: heroes,
// //   };
// // };

// export const heroesFetched = createAction('HEROES_FETCHED');

// // export const heroesFetchingError = () => {
// //   return {
// //     type: 'HEROES_FETCHING_ERROR',
// //   };
// // };

// export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');

// // export const heroesDeleting = (id) => {
// //   return {
// //     type: 'HERO_DELETING',
// //     payload: id,
// //   };
// // };

// export const heroesDeleting = createAction('HERO_DELETING');

// // export const heroAdding = (newHero) => {
// //   return {
// //     type: 'HERO_ADDING',
// //     payload: newHero,
// //   };
// // };

// export const heroAdding = createAction('HERO_ADDING');

// // export const heroesFilterApplying = (element) => (dispatch) => {
// //   setTimeout(() => {
// //     dispatch({
// //       type: 'HEROES_FILTER_APPLYING',
// //       payload: element,
// //     });
// //   }, 1000);
// // };

// export const heroesFilterApplying = createAction('HEROES_FILTER_APPLYING');

// // export const heroesFilterApplying = (element) => {
// //   return {
// //     type: 'HEROES_FILTER_APPLYING',
// //     payload: element,
// //   };
// // };
