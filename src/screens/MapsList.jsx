import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppContext} from '../context/AppContext';

const MapsList = ({navigation}) => {
  const {setCreatorMode, polygonCoordinates} = useContext(AppContext);

  const handleCreate = () => {
    setCreatorMode(true);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCreate} style={styles.btn}>
        <Text style={styles.btnTxt}>Create</Text>
      </TouchableOpacity>

      {polygonCoordinates.map(item => (
        <View key={item.id}>
          <TouchableOpacity
            onPress={() => console.log(item)}
            style={styles.itemContainer}>
            <View>
              <Text style={styles.title}>{item?.title}</Text>
              <Text style={styles.area}>400 SF</Text>
            </View>

            <TouchableOpacity onPress={() => console.log('delete')}>
              <Icon name="delete" size={26} color="maroon" />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default MapsList;
const styles = StyleSheet.create({
  container: {
    margin: 20,
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
