import React, {createContext, useState, useEffect} from 'react';
import {lightColors, darkColors} from './colors';
import {useColorScheme} from 'react-native';
import Theme from 'react-native-theme';
import colors from './colors';

export const ThemeContext = createContext({
  dark: false,
  colors: lightColors,
  setScheme: () => {},
});

export const ThemeProvider = ({children}) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');

  useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  const theme = {
    dark: isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: scheme => setIsDark(scheme === 'dark'),
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
