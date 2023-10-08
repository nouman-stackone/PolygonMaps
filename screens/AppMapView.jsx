import React, {useState} from 'react';
import MapView, {Polygon} from 'react-native-maps';
import {enableLatestRenderer} from 'react-native-maps';

import {View, Button} from 'react-native';
enableLatestRenderer();

const AppMapView = () => {
  const [polygonCoordinates, setPolygonCoordinates] = useState([]);

  const handleMapPress = event => {
    const newCoordinates = [
      ...polygonCoordinates,
      event.nativeEvent.coordinate,
    ];

    setPolygonCoordinates(newCoordinates);
  };

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        onPress={handleMapPress}
        initialRegion={{
          latitude: 33.6844,
          longitude: 73.0479,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {polygonCoordinates.length >= 2 && (
          <Polygon
            coordinates={polygonCoordinates}
            fillColor="rgba(0, 200, 0, 0.5)"
            strokeColor="rgba(0, 0, 0, 0.5)"
          />
        )}
      </MapView>
      <Button title="Clear" onPress={() => setPolygonCoordinates([])} />
    </View>
  );
};

export default AppMapView;
