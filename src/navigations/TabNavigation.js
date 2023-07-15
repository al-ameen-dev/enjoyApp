import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from "react-native";
import Home from '../screens/home';
import About from '../screens/about';
import SIGNINUP_THEME_COLOR from "../constants";
import { MaterialCommunityIcons,Feather } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function MyTabs(){
    return(
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor:SIGNINUP_THEME_COLOR,
            tabBarInactiveTintColor:'grey',
            tabBarShowLabel:false,
            tabBarActiveBackgroundColor:"#D6E7FC",
            tabBarStyle:styles.tabbarstyle,
            tabBarItemStyle:styles.tabbaritemstyle,
          }}>
            <Tab.Screen name="home" component={Home} options={{headerShown:false,
                tabBarIcon:({color,size})=>(
                    <MaterialCommunityIcons name="food-turkey" size={30} color={color} />
                ) }} />
            <Tab.Screen name="profile" component={About} options={{headerShown:false,
                tabBarIcon:({color,size})=>(
                    <Feather name="user-check" size={27} color={color} />
                ) }} />
            <Tab.Screen name="order" component={Home} options={{headerShown:false,
                tabBarIcon:({color,size})=>(
                    <MaterialCommunityIcons name="food-turkey" size={30} color={color} />
                ) }} />
            <Tab.Screen name="about" component={About} options={{headerShown:false,
                tabBarIcon:({color,size})=>
                    (<Feather name="user-check" size={27} color={color} />
                ) }} />
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    bold:{
        fontWeight:"bold",
    },
    tabbarstyle:{
        
    },
    tabbaritemstyle:{
        borderRadius:25,
        marginHorizontal:15,
    }
})