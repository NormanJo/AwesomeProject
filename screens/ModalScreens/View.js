import React, {useState} from 'react';
import {
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Title} from 'react-native-paper';

const View = ({modalVisible, selectedTheme, closeModal2}) => {
  return (
    <SafeAreaView
      style={[styles.container, selectedTheme === 'dark' && styles.darkTheme]}>
      <Modal visible={modalVisible} animationType="slide">
        <View style={{flex: 1}}>
          <Ionicons
            name="chevron-back-outline"
            size={25}
            color={selectedTheme === 'dark' ? '#F2F2F2' : '#202020'}
            onPress={closeModal2}
            paddingHorizontal={20}
            style={{paddingTop: 20}}
          />
          <View>
            <Title
              style={{
                position: 'relative',
                marginHorizontal: 60,
                marginVertical: -28,
                fontSize: 25,
                color: selectedTheme === 'dark' ? '#F2F2F2' : '#202020',
              }}>
              Конфиденциальность
            </Title>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  darkTheme: {
    backgroundColor: '#202020',
  },
  centerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  centerButtonText: {
    marginLeft: 40,
    fontSize: 20,
    marginTop: -34,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    paddingTop: 20,
    paddingBottom: 0,
  },
  avatarContainer: {
    position: 'relative',
    left: 20,
    top: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoContainer: {
    position: 'relative',
    right: 30,
    top: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  themeSwitchContainer: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  themeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C9D6DF',
    paddingVertical: 4,
    paddingHorizontal: 18,
    marginRight: 0,
  },
  selectedThemeButton: {
    backgroundColor: '#52616B',
  },
  themeButtonText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 14,
  },
  firstThird: {
    // Additional styles for the first section
  },
  remainingTwoThirds: {
    // Additional styles for the second section
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 0,
    paddingTop: 10,
  },

  nickname: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  arrow: {
    width: 20,
    height: 20,
  },
  deleteButton: {
    position: 'absolute',
    right: -10,
    top: -10,
    backgroundColor: '#F9F7F7',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  avatarButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
    backgroundColor: '#C9D6DF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  avatarButtonDark: {
    backgroundColor: '#52616B', // Цвет для темной темы
  },
});

export default View;
