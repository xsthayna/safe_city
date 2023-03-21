import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';

import ExternalLinks from '../../views/ExternalLinks';
import Map from '../../views/Map';
import Feed from "../../views/Feed";
import UnderConstruction from "../../views/UnderConstruction"

import { Colors } from "../../constants/Colors";
import { CallButton } from "../../components";
import { useSelector } from "react-redux";
import { createStackNavigator } from  '@react-navigation/stack';
import Welcome from "../../views/Welcome";
import Login from "../../views/Login";
import SignUp from "../../views/SignUp";
import AddOccourence from "../AddOccourence";

const Tab = createBottomTabNavigator();

export default function Routes() {

    const user = useSelector((state: any) => state.user)
    const Stack = createStackNavigator();

    if (!user || !user.user.token) return (
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
    )

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
            initialRouteName="Map"
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
                name="Map" 
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