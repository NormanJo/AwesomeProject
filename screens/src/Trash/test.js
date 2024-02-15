import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider, ThemeContext } from '../ThemeContext';
import SettingScreen from './Setting/Setting';
import ChatScreen from './Chat/Chat';
import VoiceScreen from './Voice';
import TextScreen from './Text/Text';
// import Test from './Test';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();
export default function App() {
 
  // const Stack = createStackNavigator();
  const { dark, colors, setScheme } = useContext(ThemeContext);
  const containerStyle = dark ? styles.containerDark : styles.container;

  return (
    <View style={containerStyle}>
      <ThemeProvider>
        <NavigationContainer>
        <Tab.Navigator
            screenOptions={({route}) => ({
              headerShown: false,
              tabBarIconStyle: {marginBottom: -3},
              tabBarStyle: {
                backgroundColor: dark ? '#202020' : 'white',
              },
              tabBarActiveTintColor: dark ? 'red' : 'black',
              tabBarInactiveTintColor: '#a0a3a8',
            })}>
            <Tab.Screen
              name="Текст"
              component={TextScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Ionicons
                    name="document-text-outline"
                    size={30}
                    color={color}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Чаты"
              component={ChatScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Ionicons
                    name="chatbubbles-outline"
                    size={30}
                    color={color}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Голос"
              component={VoiceScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Ionicons name="mic-outline" size={30} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Настройки"
              component={SettingScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Ionicons name="settings-outline" size={30} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Тест"
              component={Test}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Ionicons
                    name="alert-circle-outline"
                    size={30}
                    color={color}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
  },
  tabBarDark: {
    backgroundColor: '#202020',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#202020',
  },
});
