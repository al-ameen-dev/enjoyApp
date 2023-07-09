import React,{ useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity,TouchableWithoutFeedback,Keyboard,TextInput, KeyboardAvoidingView} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Man from "../../assets/man.svg";
import Deli from "../../assets/delivery.svg";

export default function Login(){

    const [phoneNumber,setPhoneNumber] = useState();
    const [password,setPassword] = useState();

    const handlePhoneChange = (num) =>{
        setPhoneNumber(num);
    }

    const handlePasswordChange = (pass) =>{
        setPassword(pass);
    }

    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior="padding" style={styles.loginContainer}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.imagecontainer} >
                <Man height={200} width={250}/>
            </View>
            <View style={styles.form} >
                <View style={{flexDirection:"row"}}>
                    <MaterialIcons style={styles.icon} name="mobile-friendly" size={24} color="skyblue" />
                    <TextInput style={styles.input} inputMode="numeric" maxLength={10} value={phoneNumber} placeholder="Enter the phone number" onChangeText={handlePhoneChange}/>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Entypo style={styles.icon} name="key" size={24} color="skyblue" />
                    <TextInput secureTextEntry={true} style={styles.input} inputMode="text" value={password} placeholder="Enter the password" onChangeText={handlePasswordChange}/>
                </View>     
                <TouchableOpacity style={styles.loginButton} >
                    <Text>Login</Text>
                </TouchableOpacity>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.registerText}>
                        Don't have an account!
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.signup}> Signup</Text>
                    </TouchableOpacity>
                </View>
                
            </View>   
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    loginContainer:{
        marginTop:10,
        flex:1,
        backgroundColor:'#fff',
        padding:5,
    },
    imagecontainer:{
        padding:10,
        justifyContent:"center",
        alignItems:"center",
    },
    form:{
        margin:15,
        paddingVertical:10,
        paddingHorizontal:15,
        borderColor:'#82e0cc',
        borderRadius:10,
    },
    input:{
        flex:1,
        paddingVertical:1,
        marginVertical:10,
        borderBottomColor:"#ccc",
        borderBottomWidth:1,
    },
    icon:{
        marginVertical:10,
        marginRight:5,
    },
    loginButton:{
        marginTop:10,
        paddingVertical:10,
        backgroundColor:"skyblue",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:7,
    },
    title:{
        marginVertical:30,
        fontSize:25,
        textAlign:"center",
        fontWeight:"bold",
    },
    registerText:{
        fontWeight:"bold",
        flex:1,
        marginTop:30,
    },
    signup:{
        fontStyle:"italic",
        marginTop:30,
        padding:2,
        textDecorationLine:"underline"
    },

    
})