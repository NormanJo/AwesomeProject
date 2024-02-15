import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image,
  Platform,
  Alert,
  ActivityIndicator,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Title} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import {ThemeContext} from '../src/Theme/ThemeContext'; // Пример пути, учитывая, что ThemeContext находится в корне проекта

// import colors from '/colors';

const Account = ({modalVisible, closeModal, handlePhotoChange}) => {
  const {dark} = useContext(ThemeContext);
  const containerStyle = dark ? styles.containerDark : styles.container;
  const [selectedTheme, setSelectedTheme] = useState('light');
  const [photo, setPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [circleColor, setCircleColor] = useState('#538ac0'); // Цвет по умолчанию
  const [isImageLoading, setIsImageLoading] = useState(false);

  const handleAvatarPress = () => {
    Alert.alert(
      'Выберите источник изображения',
      'Выберите источник изображения',
      [
        {
          text: 'Камера',
          onPress: launchCamera,
        },
        {
          text: 'Галерея',
          onPress: launchImageLibrary,
        },
        {
          text: 'Закрыть',
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  };

  const handleDeletePhoto = () => {
    setPhoto(null);
    handlePhotoChange(null);
  };

  const launchCamera = () => {
    ImagePicker.launchCamera({}, response => {
      if (!response.didCancel) {
        setIsLoading(true);
        setTimeout(() => {
          setPhoto(response.uri);
          setIsLoading(false);
          handlePhotoChange(response.uri);
        }, 1000);
      }
    });
  };

  const launchImageLibrary = () => {
    ImagePicker.launchImageLibrary({}, response => {
      if (!response.didCancel) {
        setIsLoading(true);
        setTimeout(() => {
          setPhoto(response.uri);
          setIsLoading(false);
          handlePhotoChange(response.uri);
        }, 1000);
      }
    });
  };

  return (
    <View style={containerStyle}>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Ionicons
            name="chevron-back-outline"
            size={25}
            color={selectedTheme === 'dark' ? '#F2F2F2' : '#202020'}
            onPress={closeModal}
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
              Мой аккаунт
            </Title>
          </View>
          <View style={styles.header}>
            <View style={styles.avatarContainer}>
              <TouchableOpacity
                onPress={handleAvatarPress}
                style={[
                  styles.avatarButton,
                  selectedTheme === 'dark' && styles.avatarButtonDark,
                ]}>
                {photo ? (
                  <View>
                    <Image source={{uri: photo}} style={styles.avatar} />
                    {!isLoading && (
                      <TouchableOpacity
                        onPress={handleDeletePhoto}
                        style={styles.deleteButton}>
                        <EvilIcons
                          name={
                            selectedTheme === 'dark' ? 'close-o' : 'close-o'
                          }
                          size={35}
                          color="black"
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                ) : (
                  <View style={styles.selectPhotoButton}>
                    {isLoading || isImageLoading ? (
                      <ActivityIndicator color="white" size={90} />
                    ) : (
                      <Ionicons
                        name={selectedTheme === 'dark' ? 'person' : 'person'}
                        size={70}
                        color="white"
                      />
                    )}
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              position: 'relative',
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 1,
              width: 350,
              borderBottomColor: '#CFCFCF',
              alignSelf: 'center',
            }}></View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    position: 'relative',
    left: 20,
    top: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginRight: 0,
    paddingTop: 10,
  },
  deleteButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#F9F7F7',
    borderRadius: 20,
    width: 35,
    height: 35,
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
    width: 120,
    height: 120,
    borderRadius: 60,
    marginLeft: 100,
    marginVertical: -30,
    backgroundColor: '#538ac0',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  avatarButtonDark: {
    backgroundColor: '#52616B', // Цвет для темной темы
  },
});

export default Account;
