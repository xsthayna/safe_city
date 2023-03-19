import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';

import ExternalLinks from '../../views/ExternalLinks';
import Map from '../../views/Map';
import Welcome from '../../views/Welcome';
import Login from '../../views/Login';
import SignUp from "../../views/SignUp";
import Feed from "../../views/Feed";

import { Colors } from "../../constants/Colors";
import { CallButton } from "../../components";


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
                name="login"
                component={Welcome}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="menu" size={28} color={color} />
                    )
                }}
            />

            <Tab.Screen 
                name="External Message Links" 
                component={ExternalLinks}
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
                name="Map" 
                component={Map}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="map-pin" size={28} color={color} />
                    )
                }}  
            />

            <Tab.Screen 
                name="Feed" 
                component={Feed}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="list" size={28} color={color} />
                    )
                }} 
            />

        </Tab.Navigator>
    )

}