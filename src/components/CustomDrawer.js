import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Image, View, StyleSheet ,Linking, Text} from 'react-native';
import Man from "../../assets/man.svg";

import { MaterialCommunityIcons,Feather } from '@expo/vector-icons'


export default function CustomDrawerContent(props){

    return(
        <View style={{flex:1}}>
            <Image source={require('../../assets/icon.png')} style={styles.sidemenu}/>
            <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
            <DrawerItemList {...props} />
            <DrawerItem label="Visit Us" onPress={() => Linking.openURL('https://aboutreact.com/')}/>
            </DrawerContentScrollView>        
        </View>
    )
}


const styles = StyleSheet.create({
    draweritem:{
        fontSize:20,
    },
    drawerHeader:{
        marginVertical:4,
        flex:1,
        padding:5,
    },
    sidemenu: {
        marginTop:60,
        resizeMode: 'stretch',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
      },
    drawerHeaderImage:{
        borderRadius:5,
    }

})