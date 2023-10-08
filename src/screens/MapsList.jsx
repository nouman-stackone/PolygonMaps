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
      <Text>
        {polygonCoordinates.map((item, id) => (
          <Text key={id}>{JSON.stringify(item)}</Text>
        ))}
      </Text>
      <Button title="Create" onPress={handleCreate} />
    </View>
  );
};

export default MapsList;
