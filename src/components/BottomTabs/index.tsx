import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';

import ExternalLinks from '../../views/ExternalLinks';
import Map from '../../views/Map';
import Feed from "../../views/Feed";
import UnderConstruction from "../../views/UnderConstruction"

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
            initialRouteName="Ocorrências"
        >
            <Tab.Screen 
                name="Menu"
                component={UnderConstruction}
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
                    headerShown: false
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
                component={UnderConstruction}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Icon name="list" size={28} color={color} />
                    ),
                    headerStyle:{
                        backgroundColor: Colors.primary,
                        height: 60
                    },
                    headerShown: false,
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