import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen';
import NdefTypeListScreen from './Screens/NdefTypeListScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NdefTypeList" component={NdefTypeListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
