import React, {useContext, useState} from 'react';
import MapView, {Polygon} from 'react-native-maps';
import {View, Button, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {enableLatestRenderer} from 'react-native-maps';
import {AppContext} from '../context/AppContext';

enableLatestRenderer();

const AppMapView = ({navigation}) => {
  const {
    creatorMode,
    setCreatorMode,
    polygonCoordinates,
    setPolygonCoordinates,
  } = useContext(AppContext);

  const [coordinates, setCoordinates] = useState([]);

  const initialRegion = {
    latitude: 33.6844,
    longitude: 73.0479,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleMapPress = event => {
    if (creatorMode) {
      const newCoordinates = [...coordinates, event.nativeEvent.coordinate];

      setCoordinates(newCoordinates);
    }
  };

  const handleNavigation = () => {
    if (coordinates.length > 0)
      Alert.alert('Alert!', 'Discard current selection?', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            setCreatorMode(false);
            setCoordinates([]);
            navigation.navigate('MapList');
          },
        },
      ]);
    else {
      setCreatorMode(false);
      navigation.navigate('MapList');
    }
  };

  const handleCreate = () => {
    if (coordinates.length > 2) {
      const newPolygonCoordinates = [...polygonCoordinates, coordinates];

      setPolygonCoordinates(newPolygonCoordinates);
      setCoordinates([]);
      navigation.navigate('MapList');
    }
  };

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        onPress={handleMapPress}
        initialRegion={initialRegion}>
        {coordinates.length >= 2 && (
          <Polygon
            coordinates={coordinates}
            fillColor="rgba(0, 200, 0, 0.5)"
            strokeColor="rgba(0, 0, 0, 0.5)"
          />
        )}
      </MapView>

      {creatorMode && (
        <View style={styles.btnGroup}>
          <Button title="Create" onPress={handleCreate} />
          <Button title="Clear" onPress={() => setCoordinates([])} />
        </View>
      )}
      <View style={styles.listIconContainer}>
        <TouchableOpacity onPress={handleNavigation}>
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
  btnGroup: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{translateX: -60}],
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 8,
  },
});
