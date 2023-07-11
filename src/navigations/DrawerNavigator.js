import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainNavigator from "./MainNavigator";
import About from "../screens/about";
import Signin from "../screens/signin";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator screenOptions={{swipeEnabled:false}}>
            <Drawer.Screen name="main" component={MainNavigator}/>
            <Drawer.Screen name="about" component={Signin} />
        </Drawer.Navigator>
    )
}