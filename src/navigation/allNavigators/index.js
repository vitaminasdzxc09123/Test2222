import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegistryScreen from '../../screen/auth/RegistryScreen';
import HomeScreen from '../../screen/HomeScreen';
import LoginScreen from '../../screen/auth/LoginScreen';
import {useDispatch, useSelector} from 'react-redux';
import {setToken} from '../../redux/action';

const Stack = createNativeStackNavigator();

export default function allNavigators() {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.apiReducer);

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        dispatch(setToken(token));
      }
    };

    fetchData();
  }, [token]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registry" component={RegistryScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
