import history from 'helpers/history';
import { Router } from 'react-router-dom';
import Route from 'routes';

function App() {
  return (
    <Router history={history}>
      <Route />
    </Router>
  );
}

export default App;
