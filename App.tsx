/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import BottomTabs from './src/components/BottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from  '@react-navigation/stack';
import Login from './src/views/Login';
import Welcome from './src/views/Welcome';
import SignUp from './src/views/SignUp';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createStackNavigator();
  const isLogged = true;

  if (isLogged) return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  )

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="welcome"  
            component={Welcome} 
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen 
            name="login"  
            component={Login}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen 
            name="signUp"  
            component={SignUp} 
            options={{
              headerShown: false
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>
   );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
