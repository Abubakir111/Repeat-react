import Todos from '../pages/todos/Todos';
import Posts from '../pages/posts/Posts';
import Users from '../pages/users/Users';
import Links from './Links';

const publicRoutes = [
  {
    path: Links.users,
    element: <Users />,
  },
  {
    path: Links.todos,
    element: <Todos />,
  },
  {
    path: Links.posts,
    element: <Posts />,
  },
];
export default publicRoutes;
