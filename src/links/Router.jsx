import Links from './Links';
import Users from '../pages/users/Users';
import NoRouting from '../pages/noRouting/NoRouting';
import Portfolio from '../pages/portfolio/Portfolio';
import DzList from '../components/dzList/DzList';

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
    path: Links.dzList,
    element: <DzList />,
  },
];
export default publicRoutes;
