import style from './portfolio.module.css';
import avatar from '../../acsses/images/avatar.jpg';

const Portfolio = () => {
  return (
    <div className={style.container}>
      <img src={avatar} alt="Profile Picture" className={style.picture} />
      <h1>Базаркул уулу Бакир</h1>
      <p>Email: bakirbazarkul16@gmail.com</p>
      <p>Phone: (700) 394-180</p>

      <div className={style.section}>
        <h2>Краткое содержание</h2>
        <p>
          Высоко мотивированный и внимательный к деталям человек с опытом работы
          в Веб-разработка.
        </p>
      </div>

      <div className={style.section}>
        <h2>Опыт</h2>
        <div className={style.experience}>
          <h3>Web Developer</h3>
          <p>geeks.kg</p>
          <p> октябрь 2023 – настоящее время</p>
          <ul>
            <li>
              Разработка и поддержка веб-сайтов компаний с использованием HTML,
              CSS и JavaScript.
            </li>
            <li>
              Сотрудничал с командой дизайнеров и разработчиков для реализации
              новые возможности.
            </li>
          </ul>
        </div>
      </div>

      <div className={style.section}>
        <h2>Образование</h2>
        <div className={style.education}>
          {/* <h3>Secondary education</h3> */}
          <p>Компания geeks.kg</p>
          <p>Окончил 2023 года</p>
        </div>
      </div>

      <div className={style.section}>
        <h2>Навыки</h2>
        <ul className={style.skill_list}>
          <li className={style.skill_item}>
            <i className="fas fa-code icon"></i>HTML
          </li>
          <li className={style.skill_item}>
            <i className="fas fa-code icon"></i>CSS
          </li>
          <li className={style.skill_item}>
            <i className="fas fa-code icon"></i>SASS
          </li>
          <li className={style.skill_item}>
            <i className="fas fa-code icon"></i>SCSS
          </li>

          <li className={style.skill_item}>
            <i className="fab fa-js icon"></i>JavaScript
          </li>
          <li className={style.skill_item}>react</li>
          <li className={style.skill_item}>reduxToolkit</li>
          <li className={style.skill_item}>TanStack Query</li>
          <li className={style.skill_item}>Tailwindcss</li>
          <li className={style.skill_item}>GIT</li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
