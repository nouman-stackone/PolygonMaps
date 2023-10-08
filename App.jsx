import {useState} from 'react';
import {AppContext} from './src/context/AppContext';
import Router from './src/router';

const App = () => {
  const [hasUser, setHasUser] = useState(true);
  const [creatorMode, setCreatorMode] = useState(false);
  const [polygonCoordinates, setPolygonCoordinates] = useState([]);

  return (
    <AppContext.Provider
      value={{
        hasUser,
        setHasUser,
        creatorMode,
        setCreatorMode,
        polygonCoordinates,
        setPolygonCoordinates,
      }}>
      <Router />
    </AppContext.Provider>
  );
};

export default App;
