import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppMapView from './src/screens/AppMapView';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapsList from './src/screens/MapsList';
import {AppContext} from './src/context/AppContext';

const Stack = createNativeStackNavigator();

const App = () => {
  const [hasUser, setHasUser] = useState(true);
  const [creatorMode, setCreatorMode] = useState(false);
  const [polygonCoordinates, setPolygonCoordinates] = useState([]);

  return (
    <AppContext.Provider
      value={{
        hasUser,
        setHasUser,
        creatorMode,
        setCreatorMode,
        polygonCoordinates,
        setPolygonCoordinates,
      }}>
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
    </AppContext.Provider>
  );
};

export default App;
