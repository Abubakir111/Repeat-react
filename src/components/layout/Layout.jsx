import { Link, Outlet } from 'react-router-dom';
import Links from '../../links/Links';
import style from './layout.module.css';
import DzList from '../dzList/DzList';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li className={style.li}>
              <Link to={Links.users} className={style.link}>
                Пользователи
              </Link>
            </li>
            <li className={style.li}>
              <Link to={Links.portfolio} className={style.link}>
                Портфолио
              </Link>
            </li>
            <li className={style.li}>
              <Link to={Links.taskAddingPage} className={style.link}>
                Домашний задание
              </Link>
            </li>
          </ul>
        </nav>
        <DzList />
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
