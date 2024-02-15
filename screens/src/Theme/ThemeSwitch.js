import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ThemeSwitch = ({
  selectedTheme,
  handleThemeChange,
  themeButtonStyle,
  selectedThemeButtonStyle,
  themeButtonTextStyle,
}) => {
  return (
    <>
      <TouchableOpacity
        style={[
          themeButtonStyle,
          selectedTheme === 'light' && selectedThemeButtonStyle,
          {borderTopLeftRadius: 10, borderBottomLeftRadius: 10},
        ]}
        onPress={() => handleThemeChange('light')}>
        <Ionicons name="sunny" size={20} color="#526a7b" />
        <Text style={themeButtonTextStyle}>Светлая</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          themeButtonStyle,
          selectedTheme === 'dark' && selectedThemeButtonStyle,
          {borderTopRightRadius: 10, borderBottomRightRadius: 10},
        ]}
        onPress={() => handleThemeChange('dark')}>
        <Ionicons name="moon" size={20} color="#526a7b" />
        <Text style={themeButtonTextStyle}>Тёмная</Text>
      </TouchableOpacity>
    </>
  );
};

export default ThemeSwitch;
