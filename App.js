import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './screens/src/Navigation/TabNavigator'; 
import { StatusBar } from 'react-native';
import {LoginScreen,SighUpScreen} from "./screens";
import SplashScreen from 'react-native-splash-screen'
import { ThemeProvider } from 'awesomeproject/screens/src/Theme/ThemeContext';

const App = () => {
  
  useEffect(() => {
    if(Platform.OS === 'android')
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
