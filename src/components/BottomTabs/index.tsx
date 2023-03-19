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
import { Image } from "react-native";


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
                    ),
                    headerStyle:{
                        backgroundColor: Colors.primary,
                        height: 60
                    },
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        color: "white",
                        fontSize: 16,
                        fontWeight: "normal"
                    },
                }}
            />

            <Tab.Screen 
                name="Realizar denúncia" 
                component={ExternalLinks}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="message-square" size={28} color={color} />
                    ),
                    headerStyle:{
                        backgroundColor: Colors.primary,
                        height: 60
                    },
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        color: "white",
                        fontSize: 16,
                        fontWeight: "normal"
                    },
                }}
            />

            <Tab.Screen 
                name="Call Button" 
                component={() => null}
                options={{
                    tabBarIcon: () => (
                        <CallButton />
                    ),
                    headerStyle:{
                        backgroundColor: Colors.primary,
                        height: 60
                    },
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        color: "white",
                        fontSize: 16,
                        fontWeight: "normal"
                    },
                }}    
            />

            <Tab.Screen 
                name="Ocorrências" 
                component={Map}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="map-pin" size={28} color={color} />
                    ),
                    headerStyle:{
                        backgroundColor: Colors.primary,
                        height: 60
                    },
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        color: "white",
                        fontSize: 16,
                        fontWeight: "normal"
                    },
                }}  
            />

            <Tab.Screen 
                name="Públicações" 
                component={Feed}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="list" size={28} color={color} />
                    ),
                    headerStyle:{
                        backgroundColor: Colors.primary,
                        height: 60
                    },
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        color: "white",
                        fontSize: 16,
                        fontWeight: "normal"
                    }
                }} 
            />

        </Tab.Navigator>
    )

}