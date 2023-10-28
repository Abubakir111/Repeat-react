import style from './noRouting.module.css';

const NoRouting = () => {
  return (
    <div className={style.container}>
      <h1 className={style.h1}> Такой страницы нету - ошибка 404</h1>
    </div>
  );
};

export default NoRouting;
