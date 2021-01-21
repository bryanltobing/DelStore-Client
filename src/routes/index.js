import { Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import PublicRoute from './PublicRoute';

const fallbackTemp = {
  fallback: <div>Loading...</div>,
};

const LoginPages = loadable(() => import('pages/Login/Login'), fallbackTemp);

const Route = (props) => {
  return (
    <Switch>
      <PublicRoute path="/login" exact component={LoginPages} />
    </Switch>
  );
};

export default Route;
