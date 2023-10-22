import { useEffect, useState } from 'react';
import style from './todos.module.css';
import uniqid from 'uniqid';
import axios from 'axios';

const Todos = () => {
  const [users, userTodos] = useState([]);
  const defaultState = {
    add: false,
    close: false,
  };

  const [addUser, setAddUser] = useState(defaultState);

  useEffect(() => {
    const getApi = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users?_limit=4'
      );
      userTodos(data);
      console.log(data);
    };
    getApi();
  }, []);

  const deletUser = (id) => {
    userTodos(users.filter((user) => user.id !== id));
  };

  const lie = () => {
    setAddUser({ ...addUser, add: false });
  };

  const addUsers = (e) => {
    if (e.target[1].value !== '')
      userTodos([...users, { id: uniqid(), name: e.target[1].value }]);
    e.target[1].value = '';
  };
  return (
    <div>
      <h1>Список пользователе </h1>
      <ol className={style.rounded}>
        {users.map((user) => (
          <div key={user.id}>
            <li>
              <a href="#">{user.name}</a>
              <button onClick={() => deletUser(user.id)}>x</button>
            </li>
          </div>
        ))}
      </ol>
      {addUser.add == false ? (
        <button onClick={() => setAddUser({ ...addUser, add: true })}>
          Добавить пользователя
        </button>
      ) : (
        <form onSubmit={(e) => addUsers(e)}>
          <button onClick={() => lie()} className={style.btn1}>
            x
          </button>
          <input type="text" placeholder="имя...." />
          <button type="submit">добавить</button>
        </form>
      )}
    </div>
  );
};

export default Todos;
