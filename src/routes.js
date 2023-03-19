import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';

import Login from './views/Login';
import Welcome from './views/Welcome';
import SignUp from "./views/SignUp";

import { Colors } from "./constants/Colors";
import { CallButton } from "./components";


const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                tabBarStyle: {
                    paddingBottom: 5,
                    paddingTop: 5,
                    height: 60
                },
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen 
                name="Login" 
                component={Login}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="menu" size={28} color={color} />
                    )
                }}
            />

            <Tab.Screen 
                name="Welcome" 
                component={Welcome}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="message-square" size={28} color={color} />
                    )
                }}
            />

            <Tab.Screen 
                name="SignUp02" 
                component={SignUp}
                options={{
                    tabBarIcon: () => (
                        <CallButton />
                    )
                }}    
            />

            <Tab.Screen 
                name="SignUp03" 
                component={SignUp}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="map-pin" size={28} color={color} />
                    )
                }}  
            />

            <Tab.Screen 
                name="SignUp04" 
                component={SignUp}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="list" size={28} color={color} />
                    )
                }} 
            />

        </Tab.Navigator>
    )

}