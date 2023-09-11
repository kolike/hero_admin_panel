import { useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeroesListItem from '../heroesListItem/HeroesListItem';
import Spinner from '../spinner/Spinner';
import { fetchHeroes } from './heroesSlice';
import { useGetHeroesQuery, useDeleteHeroMutation } from '../../api/apiSlice';

const HeroesList = () => {
  const { data: heroes = [], isLoading, isError } = useGetHeroesQuery();

  const [deleteHero] = useDeleteHeroMutation();

  const activeFilter = useSelector((state) => state.filters.activeFilter);

  const filtredHeroes = useMemo(() => {
    const filtredHeroes = heroes.slice();

    if (activeFilter === 'all') {
      return filtredHeroes;
    } else {
      return filtredHeroes.filter((item) => item.element === activeFilter);
    }
  }, [heroes, activeFilter]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeroes());
    // eslint-disable-next-line
  }, []);

  const onDelete = useCallback((id) => {
    deleteHero(id);
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Spinner />;
  } else if (isError) {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  }

  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">Героев пока нет</h5>;
    }

    return arr.map(({ id, ...props }) => {
      return <HeroesListItem key={id} {...props} id={id} onDelete={() => onDelete(id)} />;
    });
  };

  const elements = renderHeroesList(filtredHeroes);
  return <ul>{elements}</ul>;
};

export default HeroesList;
