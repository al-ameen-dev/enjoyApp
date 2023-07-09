import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import About from "../screens/about";
import Profile from "../screens/profile";
import Login from "../screens/login";

const Stack = createStackNavigator();

export default function MainNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="home" component={Login} options={{headerShown:false}} />
            <Stack.Screen name="profile" component={Profile} options={{title:"Profile"}} />
        </Stack.Navigator>
    )
}