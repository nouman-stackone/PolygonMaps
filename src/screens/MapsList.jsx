import {View, Text, Button} from 'react-native';
import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const MapsList = ({navigation}) => {
  const {setCreatorMode, polygonCoordinates} = useContext(AppContext);

  const handleCreate = () => {
    setCreatorMode(true);
    navigation.navigate('Home');
  };

  return (
    <View>
      {polygonCoordinates.map(item => (
        <Text onPress={() => console.log(item)} key={item?.id}>
          {item?.title}
        </Text>
      ))}
      <Button title="Create" onPress={handleCreate} />
    </View>
  );
};

export default MapsList;
