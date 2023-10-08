import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapsList from '../screens/MapsList';
import HighlightedPolygon from '../screens/HightlightedPolygon';
import AppMapView from '../screens/AppMapView';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={AppMapView}
          options={{headerShown: false}}
        />
        <Stack.Screen name="MapList" component={MapsList} />
        <Stack.Screen
          name="HighlightedPolygon"
          component={HighlightedPolygon}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
