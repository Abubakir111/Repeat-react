import style from './userForm.module.css';
import { useDispatch } from 'react-redux';
import { addUserModal, addUser } from '../../redux/generalSlice';
import { nanoid } from '@reduxjs/toolkit';

const UserForm = () => {
  const dispatch = useDispatch();
  //   valueUser получаю данные из формы
  const valueUser = (e) => {
    e.preventDefault();
    const value = e.target[1].value;
    value ? dispatch(addUser({ id: nanoid(), name: value })) : '';
    e.target[1].value = '';
  };

  return (
    <form onSubmit={(e) => valueUser(e)} className={style.forma}>
      <button
        onClick={() => dispatch(addUserModal())}
        className={style.btn1}
        type="button"
      >
        &times;
      </button>
      <input type="text" placeholder="имя...." />
      <button type="submit">добавить</button>
    </form>
  );
};
export default UserForm;
