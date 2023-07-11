import { StyleSheet } from "react-native";
import { BACKGROUND_COLOR } from "../constants";



export const globalStyles = StyleSheet.create({

    root:{
        flexDirection:'column',
        flex:1,
    },
    container:{
        paddingHorizontal:10,
        paddingVertical:28,
        backgroundColor:BACKGROUND_COLOR,
        flex:1,
    },
    title:{
        //fontFamily:'roboto-bold'
    },
    paragraph:{
        //fontFamily:'roboto-light'
    }


})