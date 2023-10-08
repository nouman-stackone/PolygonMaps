import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppContext} from '../context/AppContext';
import {UnAuthedRoutes} from './UnAuthedRoutes';
import {AuthedRoutes} from './AuthedRoutes';

export const Router = () => {
  const {hasUser} = useContext(AppContext);

  return (
    <NavigationContainer>
      {!hasUser ? <UnAuthedRoutes /> : <AuthedRoutes />}
    </NavigationContainer>
  );
};
