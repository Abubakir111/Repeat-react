import { Route, Routes } from 'react-router';
import publicRoutes from './Router';
import Layout from '../components/layout/Layout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {publicRoutes.map(({ path, element }) =>
          path === '/' ? (
            <Route key={path} index element={element} />
          ) : (
            <Route key={path} path={path} element={element} />
          )
        )}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
