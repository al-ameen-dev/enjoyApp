import { React } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import Bag from "../../assets/bag.svg";
import { SIGNINUP_THEME_COLOR } from "../constants";


export default function Onboarding({navigation}){

    return(
        <View style={styles.container}>
            <Bag width={350} height={300} />
            <Text style={styles.boldContent}> We deliver grocery at your doorstep</Text>
            <Text style={styles.lightContent}>Food Caller gives you fresh vegetables,groceries and meat.
            Order fresh items from FoodCaller</Text>
            <TouchableOpacity style={styles.getStartedButton} onPress={()=>navigation.navigate("Main")} >
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        marginTop:0,
        paddingTop:0,
        flex:1,
        backgroundColor:'#fff',
        alignItems:"center",
    },
    boldContent:{
        textAlign:"center",
        fontSize:38,
        fontWeight:"bold",
        marginTop:10,
    },
    lightContent:{
        textAlign:"center",
        fontSize:18,
        opacity:0.5,
        marginTop:10,
    },
    buttonText:{
        fontSize:18,
        color:"#fff",

    },
    getStartedButton:{
        backgroundColor:SIGNINUP_THEME_COLOR,
        paddingHorizontal:25,
        paddingVertical:15,
        marginTop:20,
        borderRadius:50,
    }
})