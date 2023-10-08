import React, {useState} from 'react';
import {AppContext} from './AppContext';

export const Provider = ({children}) => {
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
      {children}
    </AppContext.Provider>
  );
};
