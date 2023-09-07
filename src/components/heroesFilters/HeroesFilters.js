import { useState } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { heroesFilterApplying } from '../../actions';
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState('all');
  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          <button
            className={classNames('btn', 'btn-outline-dark', { active: activeFilter === 'all' })}
            onClick={() => {
              dispatch(heroesFilterApplying('all'));
              setActiveFilter('all');
            }}
          >
            Все
          </button>
          <button
            className={classNames('btn', 'btn-danger', { active: activeFilter === 'fire' })}
            onClick={() => {
              dispatch(heroesFilterApplying('fire'));
              setActiveFilter('fire');
            }}
          >
            Огонь
          </button>
          <button
            className={classNames('btn', 'btn-primary', { active: activeFilter === 'water' })}
            onClick={() => {
              dispatch(heroesFilterApplying('water'));
              setActiveFilter('water');
            }}
          >
            Вода
          </button>
          <button
            className={classNames('btn', 'btn-success', { active: activeFilter === 'wind' })}
            onClick={() => {
              dispatch(heroesFilterApplying('wind'));
              setActiveFilter('wind');
            }}
          >
            Ветер
          </button>
          <button
            className={classNames('btn', 'btn-secondary', { active: activeFilter === 'earth' })}
            onClick={() => {
              dispatch(heroesFilterApplying('earth'));
              setActiveFilter('earth');
            }}
          >
            Земля
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroesFilters;
