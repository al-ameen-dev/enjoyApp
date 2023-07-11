import React,{ useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity,TouchableWithoutFeedback,Keyboard,TextInput, KeyboardAvoidingView} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Signinsvg from "../../assets/Signin.svg";
import { SIGNINUP_THEME_COLOR } from "../constants";

export default function Signin({navigation}){

    const regex = /^\d{10}$/;
    const [phoneNumber,setPhoneNumber] = useState("");
    const [password,setPassword] = useState();
    const [errorMsgPhone,setErrorMsgPhone] = useState(null);
    const [phoneColor,setPhoneColor] = useState(SIGNINUP_THEME_COLOR);
    useEffect(() => {
        if(regex.test(phoneNumber)){
            setPhoneColor(SIGNINUP_THEME_COLOR);
            setErrorMsgPhone("");
        }
        else if(phoneNumber === ""){
            setErrorMsgPhone("");
            setPhoneColor(SIGNINUP_THEME_COLOR);
        }
        else{
            setPhoneColor("red");
            setErrorMsgPhone("Enter a valid mobile number!")
        }
    }, [phoneNumber]);

    const handlePhoneChange = (num) =>{
        setPhoneNumber(num);
    }

    const handlePasswordChange = (pass) =>{
        setPassword(pass);
    }

    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior="position" style={styles.loginContainer}>
            <Text style={styles.title}>Welcome Back!</Text>
            <View style={styles.imagecontainer} >
                <Signinsvg height={220} width={250}/>
            </View>
            <View style={styles.form} >
                <Text style={styles.errormessagephone}>{errorMsgPhone}</Text>
                <View style={{flexDirection:"row"}}>
                    <MaterialIcons style={styles.icon} name="mobile-friendly" size={24} color={phoneColor} />
                    <TextInput style={styles.input} inputMode="numeric" maxLength={10} value={phoneNumber} placeholder="Enter the phone number" onChangeText={handlePhoneChange}/>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Entypo style={styles.icon} name="key" size={24} color="#407BFF" />
                    <TextInput secureTextEntry={true} style={styles.input} inputMode="text" value={password} placeholder="Enter the password" onChangeText={handlePasswordChange}/>
                </View>     
                <TouchableOpacity style={styles.loginButton} >
                    <Text>Sign In</Text>
                </TouchableOpacity>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.registerText}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('signup')}>
                        <Text style={styles.signup}> Sign Up</Text>
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
        padding:5,
        justifyContent:"center",
        alignItems:"center",
    },
    form:{
        position:"relative",
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
        backgroundColor:"#407BFF",
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
    errormessagephone:{
        position:"absolute",
        left:45,
        top:49,
        fontSize:12,
        color:"red",
    },
    registerText:{
        fontWeight:"bold",
        flex:1,
        marginTop:30,
    },
    signup:{
        fontStyle:"italic",
        marginTop:27,
        padding:2,
        textDecorationLine:"underline"
    },

    
})