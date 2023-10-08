import React, {useLayoutEffect} from 'react';
import MapView, {Polygon} from 'react-native-maps';

const HighlightedPolygon = ({route, navigation}) => {
  const {title, coordinates} = route.params;

  const INITIAL_REGION = {
    latitude: coordinates[0].latitude,
    longitude: coordinates[0].longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
    });
  }, [navigation]);

  return (
    <MapView style={{flex: 1}} initialRegion={INITIAL_REGION}>
      {coordinates && coordinates.length > 0 && (
        <Polygon
          coordinates={coordinates}
          strokeColor="#FF0000"
          fillColor="rgba(255, 0, 0, 0.5)"
        />
      )}
    </MapView>
  );
};

export default HighlightedPolygon;
