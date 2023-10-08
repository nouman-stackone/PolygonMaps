import {NavigationContainer} from '@react-navigation/native';
import AppMapView from './screens/AppMapView';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapsList from './screens/MapsList';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={AppMapView}
          options={{headerShown: false}}
        />
        <Stack.Screen name="MapList" component={MapsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
