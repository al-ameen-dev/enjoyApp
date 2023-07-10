import React,{ useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity,TouchableWithoutFeedback,Keyboard,TextInput, KeyboardAvoidingView} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Signupsvg from "../../assets/Signup.svg";
import { SIGNINUP_THEME_COLOR } from "../constants";

export default function Signup({navigation}){

    const regex = /^\d{10}$/;
    const [phoneNumber,setPhoneNumber] = useState("");
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [errorMsgPhone,setErrorMsgPhone] = useState(null);
    const [phoneColor,setPhoneColor] = useState(SIGNINUP_THEME_COLOR);
    const [errorMsgPass,setErrorMsgPass] = useState(null);
    const [passwordColor,setPasswordColor] = useState(SIGNINUP_THEME_COLOR);

    useEffect(()=>{
        if(confirmPassword === password || password === ""){
            setErrorMsgPass("");
            setPasswordColor(SIGNINUP_THEME_COLOR);
        }
        else{
            setErrorMsgPass("Passwords didn't match!")
            setPasswordColor("red");
        }
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
    },[confirmPassword,phoneNumber]);




    const handlePhoneChange = (num) =>{
        if(regex.test(num)){
            setPhoneColor(SIGNINUP_THEME_COLOR);
        }
        setPhoneNumber(num);
    }
    const handleUserNameChange = (name) =>{
        setUserName(name);
    }
    const handlePasswordChange = (pass) =>{
        setPassword(pass);
    }
    const handleConfirmPasswordChange = (confirmpass) =>{
        setConfirmPassword(confirmpass);
    }

    const handleRegister = () =>{
        if(regex.test(phoneNumber)){
            
        }

    }
    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior="position" style={styles.loginContainer}>
            <Text style={styles.title}>Create Account</Text>
            <View style={styles.imagecontainer} >
                <Signupsvg height={225} width={250}/>
            </View>
            <View style={styles.form} >
                <Text style={styles.errormessagephone}>{errorMsgPhone}</Text>
                <Text style={styles.errormessagepass}>{errorMsgPass}</Text>
                <View style={{flexDirection:"row"}}>
                    <MaterialIcons style={styles.icon} name="mobile-friendly" size={24} color={phoneColor} />
                    <TextInput style={styles.input} inputMode="numeric" maxLength={10} value={phoneNumber} placeholder="Enter your mobile number" onChangeText={handlePhoneChange}/>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Entypo style={styles.icon} name="user" size={24} color={SIGNINUP_THEME_COLOR} />
                    <TextInput style={styles.input} inputMode="text" maxLength={20} value={userName} placeholder="Enter your name" onChangeText={handleUserNameChange}/>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Entypo style={styles.icon} name="key" size={24} color={passwordColor} />
                    <TextInput secureTextEntry={true} style={styles.input} inputMode="text" value={password} placeholder="Enter your password" onChangeText={handlePasswordChange}/>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Entypo style={styles.icon} name="key" size={24} color={passwordColor} />
                    <TextInput secureTextEntry={true} style={styles.input} inputMode="text" value={confirmPassword} placeholder="Confirm password" onChangeText={handleConfirmPasswordChange}/>
                </View>   
                <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.registerText}>
                        You already have an account?
                    </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('signin')}>
                        <Text style={styles.signup}> Sign In</Text>
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
        padding:0,
        justifyContent:"center",
        alignItems:"center",
    },
    form:{
        margin:15,
        position:"relative",
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius:10,
    },
    errormessagepass:{
        position:"absolute",
        left:45,
        top:202,
        fontSize:12,
        color:"red",
    },
    errormessagephone:{
        position:"absolute",
        left:45,
        top:49,
        fontSize:12,
        color:"red",
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
        backgroundColor:SIGNINUP_THEME_COLOR,
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
        marginTop:26,
        padding:2,
        textDecorationLine:"underline"
    },

    
})