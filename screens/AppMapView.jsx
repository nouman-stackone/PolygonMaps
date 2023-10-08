import React, {useState} from 'react';
import MapView, {Polygon} from 'react-native-maps';
import {View, Button, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {enableLatestRenderer} from 'react-native-maps';
enableLatestRenderer();

const AppMapView = ({navigation}) => {
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

      <View style={styles.listIconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('MapList')}>
          <Icon name="list-ul" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppMapView;

const styles = StyleSheet.create({
  listIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
