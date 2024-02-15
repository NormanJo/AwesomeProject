import React from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingScreen from '../../SettingScreen';
import ChatScreen from '../../ChatScreen';
import VoiceScreen from '../../VoiceScreen';
import TextScreen from '../../TextScreen';
import Test from '../../TestScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
     screenOptions={{
      tabBarStyle:{
        height:60,
        position:'absolute',
        bottom:16,
        right:16,
        left:16,
        borderRadius:15
      }
        }
        }
      
    >
   <Tab.Screen name="Text" component={TextScreen}
      options ={{
        headerShown: false, 
        tabBarShowLabel:false,
         headerStyle: {
    },
    headerTintColor: 'black', 
    headerTitleStyle: {
       
    },
    tabBarIcon:({focused}) => (
      <View style = {{alignItems:'center', justifyContent:'center',}}>
        <Image 
        source={require('awesomeproject/assets/text/iconbar.png')}
        resizeMode='contain'
        style={{
          width:30,
          height:30,
          tintColor:focused ? '#e32f45' : '#748c94'
        }}
        />
        <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:10}}>ТЕКСТ</Text>
      </View>
    ),
  }}
/>


      <Tab.Screen name="Chat" component={ChatScreen} options ={{
        tabBarShowLabel:false,
         headerTitle: 'Чаты', 
         headerStyle: {
           
         },
         headerTintColor: 'black', 
         headerTitleStyle: {
           fontWeight: 'bold', 
         },
        tabBarIcon:({focused}) => (
          <View style = {{alignItems:'center', justifyContent:'center'}}>
            <Image 
            source={require('awesomeproject/assets/chat/iconbar.png')}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor:focused ? '#e32f45' : '#748c94'
            }}
            />
            <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:10}}>ЧАТ</Text>
          </View>
        ),
        }}/>
      <Tab.Screen name="Voice" component={VoiceScreen} options ={{
        tabBarShowLabel:false,
         headerTitle: 'Переводчик голосом', 
         headerStyle: {
           
         },
         headerTintColor: 'black', 
         headerTitleStyle: {
           fontWeight: 'bold', 
         },
        tabBarIcon:({focused}) => (
          <View style = {{alignItems:'center', justifyContent:'center'}}>
            <Image 
            source={require('awesomeproject/assets/voice/iconbar.png')}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor:focused ? '#e32f45' : '#748c94'
            }}
            />
            <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:10}}>ГОЛОС</Text>
          </View>
        ),
        }}/>
      <Tab.Screen name="Settings" component={SettingScreen}
      options ={{
        headerShown: false, 
        tabBarShowLabel:false,
         headerStyle: {
           
         },
        tabBarIcon:({focused}) => (
          <View style = {{alignItems:'center', justifyContent:'center'}}>
            <Image 
            source={require('awesomeproject/assets/setting/iconbar.png')}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor:focused ? '#e32f45' : '#748c94'
            }}
            />
            <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:10}}>НАСТРОЙКИ</Text>
          </View>
        ),
        }}/>
      <Tab.Screen name=" " component={Test} options ={{
        tabBarShowLabel:false,
         headerShown: false, // Добавьте эту строку
        tabBarIcon:({focused}) => (
          <View style = {{alignItems:'center', justifyContent:'center'}}>
            <Image 
            source={require('awesomeproject/assets/test/iconbar.png')}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor:focused ? '#e32f45' : '#748c94'
            }}
            />
            <Text style={{color:focused ? '#e32f45' : '#748c94',fontSize:10}}>TEST</Text>
          </View>
        ),
        }}/>
    </Tab.Navigator>

  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },

});

export default Tabs;
