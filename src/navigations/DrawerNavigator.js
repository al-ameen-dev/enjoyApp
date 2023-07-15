import React from "react";
import { createDrawerNavigator, DrawerContent, DrawerItem } from "@react-navigation/drawer";
import MainNavigator from "./MainNavigator";
import About from "../screens/about";
import Signin from "../screens/signin";
import { Feather } from '@expo/vector-icons';
import CustomDrawerContent from "../components/CustomDrawer";
import { useNavigation } from "@react-navigation/core";
import Onboarding from "../screens/onboarding";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    
    const isNewUser;
    useEffect(() => {
        const getFirstTime = async () =>{
            try{
                isNewUser = await AsyncStorage.getItem("isNewUser");
            }catch(e){
                console.log(e);
                await AsyncStorage.setItem("isNewUser",true);
                isNewUser = await AsyncStorage.getItem("isNewUser");
            }
        }
    }, [])
    
    
    return(
        <Drawer.Navigator drawerContent={(props)=><CustomDrawerContent {...props}s/>}
            screenOptions={{drawerLabelStyle:{marginLeft:-20},}}
        >
            <Drawer.Screen name="Main" component={MainNavigator} options={{
                drawerIcon:({color})=><Feather name="home" size={22} color={color} />}}/>
            <Drawer.Screen name="about" component={Onboarding} options={{
                drawerIcon:({color})=><Feather name="home" size={22} color={color} />}}/>
        </Drawer.Navigator>
    )
}