import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainNavigator from "./MainNavigator";
import About from "../screens/about";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator screenOptions={{headerShown:false}}>
            <Drawer.Screen name="main" component={MainNavigator}/>
            <Drawer.Screen name="about" component={About} />
        </Drawer.Navigator>
    )
}