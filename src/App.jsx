import { HashRouter } from 'react-router-dom';
import AppRoutes from './links/AppRoutes';

const App = () => {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
};

export default App;
