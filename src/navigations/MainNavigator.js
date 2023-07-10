import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import About from "../screens/about";
import Profile from "../screens/profile";
import Signin from "../screens/signin";
import Signup from "../screens/signup";

const Stack = createStackNavigator();

export default function MainNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="signin" component={Signin} options={{headerShown:false}} />
            <Stack.Screen name="signup" component={Signup} options={{headerShown:false}} />
            <Stack.Screen name="home" component={Home} options={{headerShown:false}} />
            <Stack.Screen name="profile" component={Profile} options={{title:"Profile"}} />
        </Stack.Navigator>
    )
}