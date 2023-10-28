import style from './user.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUserModal, deletUser, fetchUsers } from '../../redux/generalSlice';
import UserForm from '../../components/userForm/UserForm';

const Users = () => {
  const dispatch = useDispatch();
  const data = useSelector((user) => user.generalSlice);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="container">
      <div className={style.innerContainer}>
        <div>
          <h1>Список  пользователей</h1>
          {data.loading ? (
            <div className={style.loading}>load...</div>
          ) : (
            <ol className={style.rounded}>
              {data.users.map((user) => (
                <div key={user.id}>
                  <li className={style.li}>
                    <div className={style.linkContianer}>
                      <a href="#" className={style.link}>
                        {user.name}
                      </a>
                    </div>
                    <button onClick={() => dispatch(deletUser(user.id))}>
                      &times;
                    </button>
                  </li>
                </div>
              ))}
            </ol>
          )}
        </div>
        <div className={style.addUserContainer}>
          {data.userModal == false ? (
            <button onClick={() => dispatch(addUserModal())}>
              Добавить пользователя
            </button>
          ) : (
            <UserForm />
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
