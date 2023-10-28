import Links from '../../links/Links';
import style from './addDzPage.module.css';
import { useState } from 'react';

const AddDPage = () => {
  const hendalADd = (e) => {};
  e.preventDefault();
  return (
    <div className="container">
      <h1>Домашняя задание </h1>
      <form className={style.form} onSubmit={hendalADd()}>
        <label className={style.label}>
          Какое Дз
          <input className={style.input} type="text" placeholder="ДЗ-?" />
        </label>
        <label className={style.label}>
          Добвить навигацию header
          <input
            className={style.input}
            type="text"
            placeholder="Пользователи"
          />
        </label>
        <button type="submit">Добваить </button>
      </form>
    </div>
  );
};

export default AddDPage;
