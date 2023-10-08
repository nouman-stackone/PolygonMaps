import React, {useContext, useEffect, useState} from 'react';
import MapView, {Polygon} from 'react-native-maps';
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {enableLatestRenderer} from 'react-native-maps';
import {AppContext} from '../context/AppContext';
import uuid from 'react-native-uuid';

enableLatestRenderer();

const AppMapView = ({route, navigation}) => {
  const {
    creatorMode,
    setCreatorMode,
    polygonCoordinates,
    setPolygonCoordinates,
  } = useContext(AppContext);

  const [coordinates, setCoordinates] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  // useEffect(() => {
  //   console.log('hello', route.params);
  //   if (route?.params?.polygonCords) {
  //     setCoordinates(route.params.polygonCords);
  //     console.log('hello: ', route.params.polygonCords);
  //   }
  // }, [route.params]);

  const INITIAL_REGION = {
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

  const createNewPolygon = () => {
    const newPolygonCoordinates = [
      ...polygonCoordinates,
      {title: inputValue, id: uuid.v4(), coordinates},
    ];

    setPolygonCoordinates(newPolygonCoordinates);
    setIsModalVisible(false);
    setCoordinates([]);
    setInputValue('');
    navigation.navigate('MapList');
  };

  const handleInputChange = text => {
    setInputValue(text);
  };

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        onPress={handleMapPress}
        initialRegion={INITIAL_REGION}>
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
          <Button
            title="Create"
            onPress={() => {
              if (coordinates.length > 2) setIsModalVisible(true);
            }}
          />
          <Button title="Clear" onPress={() => setCoordinates([])} />
        </View>
      )}

      <View style={styles.listIconContainer}>
        <TouchableOpacity onPress={handleNavigation}>
          <Icon name="list-ul" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Modal to take map title input */}
      <Modal
        animationType="slide"
        backdropColor="black"
        backdropOpacity={0.6}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              value={inputValue}
              onChangeText={handleInputChange}
              placeholder="Enter map name..."
            />
            <View style={styles.modalBtnGroup}>
              <Button title="Save" onPress={createNewPolygon} />
              <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
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
  // Modal styles
  modalContainer: {
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: '100%',
    borderRadius: 5,
  },
  modalBtnGroup: {
    flexDirection: 'row',
    gap: 6,
  },
});
