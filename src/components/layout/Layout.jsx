import { Link, Outlet } from 'react-router-dom';
import Links from '../../links/Links';
import style from './layout.module.css';
import { useState } from 'react';

const Layout = () => {
  const hw = [
    { id: 1, dz: 'Дз-1', link: Links.users },
    { id: 2, dz: 'Дз-2', link: Links.todos },
    { id: 3, dz: 'Дз-3', link: Links.posts },
  ];
  const [hwDAta, setHwData] = useState(hw);
  let [dzPopap, setDzPopap] = useState(false);
  const [selectedDz, setSelectedDz] = useState(
    hwDAta.filter((hw) => hw.id == 1)
  );
  console.log(selectedDz);

  const hendelThis = (id) => {
    setSelectedDz(hwDAta.filter((hw) => hw.id == id));
  };

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
              <Link to={Links.posts} className={style.link}>
                Посты
              </Link>
            </li>
            <li className={style.li}>
              <Link to={Links.todos} className={style.link}>
                Список дел
              </Link>
            </li>
          </ul>
        </nav>
        <div className={style.select}>
          {dzPopap ? (
            <ul
              className={style.openPopap}
              onClick={() => setDzPopap((dzPopap = !dzPopap))}
            >
              {hwDAta.map((hw) => (
                <li key={hw.id}>
                  <Link
                    to={hw.link}
                    className={style.a}
                    onClick={() => {
                      hendelThis(hw.id);
                    }}
                  >
                    {hw.dz}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <ul
              className={style.closePopap}
              onClick={() => setDzPopap((dzPopap = !dzPopap))}
            >
              <li>
                {selectedDz.map((selected) => (
                  <Link key={selected.id} className={style.a}>
                    {selected.dz}
                  </Link>
                ))}
              </li>
            </ul>
          )}
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
