import React, {useContext, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppContext} from '../context/AppContext';

const MapList = ({navigation}) => {
  const {
    setCreatorMode,
    polygonCoordinates,
    setPolygonCoordinates,
    setHasUser,
  } = useContext(AppContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'My Areas',
    });
  }, []);

  const handleCreate = () => {
    setCreatorMode(true);
    navigation.navigate('Home');
  };

  const handleDelete = id => {
    const newArray = polygonCoordinates.filter(item => item.id !== id);
    setPolygonCoordinates(newArray);
  };

  const showDetails = map => {
    navigation.navigate('HighlightedPolygon', {
      coordinates: map.coordinates,
      title: map.title,
    });
  };

  return (
    <View style={styles.container}>
      {/* Logout button */}
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => setHasUser(false)}>
        <Text style={styles.logoutBtnTxt}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCreate} style={styles.btn}>
        <Text style={styles.btnTxt}>Create</Text>
      </TouchableOpacity>

      {polygonCoordinates.map(item => (
        <View key={item.id}>
          <TouchableOpacity
            onPress={() => showDetails(item)}
            style={styles.itemContainer}>
            <View>
              <Text style={styles.title}>{item?.title}</Text>
              <Text style={styles.area}>400 SF</Text>
            </View>

            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Icon name="delete" size={26} color="maroon" />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default MapList;
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  logoutBtn: {
    marginBottom: 12,
  },
  logoutBtnTxt: {
    textAlign: 'right',
    color: 'red',
  },
  btn: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: 'black',
  },
  btnTxt: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
  },
  itemContainer: {
    backgroundColor: 'lightgray',
    marginTop: 22,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  area: {
    fontSize: 12,
    marginTop: 2,
  },
});
