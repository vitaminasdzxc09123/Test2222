import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../../screen/HomeScreen';
import {useSelector} from 'react-redux';

import allNavigators from '../allNavigators';

const Stack = createNativeStackNavigator();

function StacNavigation() {
  const {token} = useSelector(state => state.apiReducer);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {token != null ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="All" component={allNavigators} />
        )}
        <Stack.Screen name="HomeSecond" component={HomeScreen} />

        <Stack.Screen name="Maine" component={allNavigators} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StacNavigation;
