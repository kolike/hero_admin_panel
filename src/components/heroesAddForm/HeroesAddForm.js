import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { heroAdding } from '../../actions';
import { v4 as uuidv4 } from 'uuid';

const HeroesAddForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [element, setElement] = useState('');
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newHero = {
      id: uuidv4(),
      name,
      description,
      element,
    };

    fetch('http://localhost:3001/heroes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newHero),
    });

    dispatch(heroAdding(newHero));
  };

  return (
    <form onSubmit={onSubmitHandler} className="border p-4 shadow-lg rounded">
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Имя нового героя
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          required
          type="text"
          name="name"
          className="form-control"
          id="name"
          placeholder="Как меня зовут?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Описание
        </label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          required
          name="text"
          className="form-control"
          id="text"
          placeholder="Что я умею?"
          style={{ height: '130px' }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Выбрать элемент героя
        </label>
        <select
          required
          className="form-select"
          id="element"
          name="element"
          onChange={(e) => setElement(e.target.value)}
        >
          <option>Я владею элементом...</option>
          <option value="fire">Огонь</option>
          <option value="water">Вода</option>
          <option value="wind">Ветер</option>
          <option value="earth">Земля</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;
