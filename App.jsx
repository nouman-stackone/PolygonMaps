import React from 'react';
import MapView from 'react-native-maps';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

const App = () => {
  return (
    <MapView
      style={{height: 600, width: 400}}
      initialRegion={{
        latitude: 33.6844,
        longitude: 73.0479,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default App;
