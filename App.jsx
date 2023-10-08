import {Provider} from './src/context/Provider';
import {Router} from './src/router';

const App = () => {
  return (
    <Provider>
      <Router />
    </Provider>
  );
};

export default App;
