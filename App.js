import React from 'react';
import {Provider} from 'react-redux';
import StackNavigator from './src/navigation/authNavigator';
import {store} from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}
