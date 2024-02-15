import React, {useContext, useState} from 'react';
import {
  View,
  Switch,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
  Alert,
  ActivityIndicator,
  Modal,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Toggle = ({}) => {
  return (
    <View style={styles.themeSwitchContainer}>
      <Switch value={dark} onValueChange={handleThemeChange} />
    </View>
  );
};
const styles = StyleSheet.create({
  themeSwitchContainer: {
    position: 'relative',
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Toggle;
