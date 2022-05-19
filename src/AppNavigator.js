import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen';
import NdefTypeListScreen from './Screens/NdefTypeListScreen';
import NdefWriteScreen from './Screens/NdefWriteScreen';
import TagDetailScreen from './Screens/TagDetailScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="NdefTypeList"
          component={NdefTypeListScreen}
          options={{title: 'Ndef Type List'}}
        />
        <Stack.Screen
          name="NdefWrite"
          component={NdefWriteScreen}
          options={{title: 'Write Ndef'}}
        />
        <Stack.Screen
          name="TagDetail"
          component={TagDetailScreen}
          options={{title: 'Tag Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
