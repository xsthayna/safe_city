/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';

import BottomTabs from './src/components/BottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from  '@react-navigation/stack';
import Login from './src/views/Login';
import Welcome from './src/views/Welcome';
import SignUp from './src/views/SignUp';
import { Provider } from 'react-redux'
import store from './src/store';
import Map from './src/views/Map';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {

  const Stack = createStackNavigator();
  const user = store.getState();

  console.log('------ usre', user)
  // if (user && user.user.token) return (
  //   <Provider store={store}>
  //     <NavigationContainer>
  //       <BottomTabs />
  //     </NavigationContainer>
  //   </Provider>
  // )

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </Provider>
   );
}

export default App;
