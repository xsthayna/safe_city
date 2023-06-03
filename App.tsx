import React from 'react';
import type { PropsWithChildren } from 'react';
import { Provider } from 'react-redux'

import Navigation from './src/components/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from  '@react-navigation/stack';

import Login from './src/views/Login';
import Welcome from './src/views/Welcome';
import SignUp from './src/views/SignUp';
import store from './src/store';
import Map from './src/views/Map';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {

  const Stack = createStackNavigator();
  const user = store.getState();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
   );
}

export default App;
