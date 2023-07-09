import React,{ useCallback} from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import AppNavigation from './src/navigations/AppNavigations';


// const customFonts = {
//   'roboto-bold':require('./assets/fonts/Roboto-Bold.ttf'),
//   'roboto-light':require('./assets/fonts/Roboto-Light.ttf'),
//   'roboto-thin':require('./assets/fonts/Roboto-Thin.ttf'),
//   'roboto-medium':require('./assets/fonts/Roboto-Medium.ttf')
// }

// SplashScreen.preventAutoHideAsync();

export default function App() {

  // const [fontsLoaded]= useFonts(customFonts);

  // const onLayoutRootView = useCallback(async ()=>{
  //   if(fontsLoaded){
  //       await SplashScreen.hideAsync();
  //     }
  //   },[fontsLoaded]);


  // if( !fontsLoaded)
  // {
  //   return null;
  // }
  return(
      <> 
        <StatusBar style="dark" backgroundColor="#fff"/>
        <AppNavigation />
      </>
    )
  }