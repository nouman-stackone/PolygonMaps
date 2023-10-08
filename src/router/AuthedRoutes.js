import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapList from '../screens/MapList';
import HighlightedPolygon from '../screens/HightlightedPolygon';
import Map from '../screens/Map';

const Stack = createNativeStackNavigator();

export const AuthedRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Map}
        options={{headerShown: false}}
      />
      <Stack.Screen name="MapList" component={MapList} />
      <Stack.Screen name="HighlightedPolygon" component={HighlightedPolygon} />
    </Stack.Navigator>
  );
};
