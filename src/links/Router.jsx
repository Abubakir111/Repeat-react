import Users from '../pages/users/Users';
import NoRouting from '../pages/noRouting/NoRouting';
import Portfolio from '../pages/portfolio/Portfolio';
import AddDPage from '../pages/addDzPage/AddDzPage';
import Links from './Links';

const publicRoutes = [
  {
    path: Links.users,
    element: <Users />,
  },
  {
    path: Links.noRouting,
    element: <NoRouting />,
  },
  {
    path: Links.portfolio,
    element: <Portfolio />,
  },
  {
    path: Links.taskAddingPage,
    element: <AddDPage />,
  },
];
export default publicRoutes;
