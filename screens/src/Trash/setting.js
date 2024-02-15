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
import {ThemeContext} from './src/Theme/ThemeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ThemeSwitch from './src/Theme/ThemeSwitch';
import Toggle from './src/Toggle';

import ModalWindow from './ModalScreens/Account';
import ModalWindow1 from './ModalScreens/Language';
import ModalWindow2 from './ModalScreens/Privacy';
import ModalWindow3 from './ModalScreens/Notify';

const Setting = ({selectedTheme}) => {
  const [photo, setPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [circleColor, setCircleColor] = useState('#9C9B9B5C'); // Цвет по умолчанию
  const {dark, colors, setScheme} = useContext(ThemeContext);

  const closeModal = () => {
    setModalWindow(false);
  };
  const closeModal1 = () => {
    setModalWindow1(false);
  };
  const closeModal2 = () => {
    setModalWindow2(false);
  };
  const closeModal3 = () => {
    setModalWindow3(false);
  };

  const handleThemeChange = value => {
    const newTheme = value ? 'dark' : 'light';
    setScheme(newTheme);
    setCircleColor(value ? '#9C9B9B5C' : '#9C9B9B5C');
  };
  const modalStyle = dark ? styles.modalViewDark : styles.modalView;

  const containerStyle = dark ? styles.containerDark : styles.container;

  const [modalWindow, setModalWindow] = useState(false);
  const [modalWindow1, setModalWindow1] = useState(false);
  const [modalWindow2, setModalWindow2] = useState(false);
  const [modalWindow3, setModalWindow3] = useState(false);
  const handlePhotoChange = photo => {
    setPhoto(photo);
  };

  return (
    <View style={containerStyle}>
      
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <View style={[styles.avatarButton, {backgroundColor: circleColor}]}>
            <TouchableOpacity onPress={() => setModalWindow(true)}>
              {photo ? (
                <View>
                  <Image source={{uri: photo}} style={styles.avatar} />
                </View>
              ) : (
                <Ionicons
                  name={selectedTheme === 'dark' ? 'person' : 'person'}
                  size={40}
                  color="#7A7A76D6"
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <Text style={[styles.userInfoText, {color: colors.text}]}>
          Имя пользователя
        </Text>
        {/* <Text style={[styles.PersonalText, {color: colors.personal}]}>
          Личная информация
        </Text> */}
        <View style={styles.userInfoContainer}>
          <View style={styles.iconContainer}>
            <View style={styles.next}>
              <TouchableOpacity onPress={() => setModalWindow(true)}>
                <View style={[styles.chevron1, {color: colors.text}]}>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={15}
                    color={colors.text}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* <Text style={[styles.TitleText, {color: colors.text}]}>Настройки</Text> */}
      {/* Modal content */}

      <ModalWindow
        modalVisible={modalWindow}
        selectedTheme={selectedTheme}
        closeModal={closeModal}
        handleThemeChange={handleThemeChange}
        handlePhotoChange={handlePhotoChange}
      />
      <View style={styles.containerIcon}>
        <View style={styles.iconContainer}>
          <View
            style={[
              styles.notification,
              {backgroundColor: colors.notification},
            ]}>
            <Ionicons
              name="md-notifications"
              size={20}
              color="#F08A5D"
              onPress={() => setModalWindow3(true)}
            />
          </View>

          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => setModalWindow3(true)}>
              <Text style={[styles.centerButtonText, {color: colors.text}]}>
                Уведомления
              </Text>
            </TouchableOpacity>
            <View style={styles.rightButtonContainer}>
              <TouchableOpacity onPress={() => setModalWindow3()}>
                <View style={[styles.chevron, {color: colors.text}]}>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={15}
                    color={colors.text}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.line, {backgroundColor: circleColor}]}></View>

      <View style={styles.containerIcon}>
        <View style={styles.iconContainer}>
          <View style={[styles.privacy, {backgroundColor: colors.privacy}]}>
            <Ionicons
              name="md-shield"
              size={18}
              color="#4CAF50"
              onPress={() => setModalWindow2(true)}
            />
          </View>

          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => setModalWindow2(true)}>
              <Text style={[styles.centerButtonText, {color: colors.text}]}>
                Конфиденциальность
              </Text>
            </TouchableOpacity>

            <View style={styles.rightButtonContainer}>
              <TouchableOpacity onPress={() => setModalWindow2()}>
                <View style={[styles.chevron, {color: colors.text}]}>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={15}
                    color={colors.text}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.line, {backgroundColor: circleColor}]}></View>

      <View style={styles.containerIcon}>
        <View style={styles.iconContainer}>
          <View style={[styles.lang, {backgroundColor: colors.lang}]}>
            <Ionicons
              name="earth"
              size={18}
              color="#2196F3"
              onPress={() => setModalWindow1(true)}
            />
          </View>
          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => setModalWindow1(true)}>
              <Text style={[styles.centerButtonText, {color: colors.text}]}>
                Изменить язык
              </Text>
            </TouchableOpacity>
            <View style={styles.rightButtonContainer}>
              <TouchableOpacity onPress={() => setModalWindow1()}>
                <View style={[styles.chevron, {color: colors.text}]}>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={15}
                    color={colors.text}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.line, {backgroundColor: circleColor}]}></View>

      <View style={styles.containerIcon}>
        <View style={styles.iconContainer}>
          <View style={[styles.device, {backgroundColor: colors.device}]}>
            <Ionicons
              name="phone-portrait"
              size={18}
              color="#673AB7"
              onPress={() => setModalWindow1(true)}
            />
          </View>

          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => setModalWindow1(true)}>
              <Text style={[styles.centerButtonText, {color: colors.text}]}>
                Устройства
              </Text>
            </TouchableOpacity>
            <View style={styles.rightButtonContainer}>
              <TouchableOpacity onPress={() => setModalWindow1()}>
                <View style={[styles.chevron, {color: colors.text}]}>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={15}
                    color={colors.text}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.line, {backgroundColor: circleColor}]}></View>

      <View style={styles.containerIcon}>
        <View style={styles.iconContainer}>
          <View style={[styles.view, {backgroundColor: colors.view}]}>
            <Ionicons
              name="color-palette"
              size={18}
              color="#9E9862F2"
              onPress={() => setModalWindow1(true)}
            />
          </View>

          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => setModalWindow1(true)}>
              <Text style={[styles.centerButtonText, {color: colors.text}]}>
                Темный режим
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.themeSwitchContainer}>
        <Switch value={dark} onValueChange={handleThemeChange} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  PersonalText: {
    fontSize: 13,
    // fontWeight: 'bold',
    marginTop: 65,
    color: 'red',
    right: 130,

    textAlign: 'left',
  },
  chevron: {
    // paddingBottom: 10,
    top: -6,
    width: 40,
    right: 10,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#9C9B9B5C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chevron1: {
    // paddingBottom: 10,
    top: -6,
    width: 40,
    right: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#9C9B9B5C',
    justifyContent: 'center',
    alignItems: 'center',
  },

  TitleText: {
    fontSize: 25,
    // fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
    // textAlign: 'left',
  },
  userInfoText: {
    fontSize: 18,
    // fontWeight: 'bold',
    left: 40,
    marginTop: 100,
    marginRight: 20,
    textAlign: 'left',
  },
  rightButtonContainer: {
    marginLeft: 335,
    marginTop: -35,
    // Регулируйте этот отступ в соответствии с вашими потребностями
  },
  switch: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  line: {
    height: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    width: 370,
    borderBottomColor: '#CFCFCF',
    alignSelf: 'center',
    position: 'relative',
    top: 0,
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 0,
    paddingHorizontal: 10,
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#202020',
    paddingTop: 0,
    paddingHorizontal: 10,
  },
  // text: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   marginBottom: 10,
  // },
  iconContainer: {
    marginVertical: 5,
    marginHorizontal: 5,
  },

  textContainer: {
    marginTop: 8,
    // Пространство между иконкой и текстом
  },

  notification: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationDark: {
    width: 25,
    height: 25,
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  privacy: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  privacyDark: {
    width: 25,
    height: 25,
    borderRadius: 9999,
    // backgroundColor: '#F08A5D6B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lang: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  langDark: {
    width: 25,
    height: 25,
    borderRadius: 9999,
    // backgroundColor: '#F08A5D6B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  device: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deviceDark: {
    width: 25,
    height: 25,
    borderRadius: 9999,
    // backgroundColor: '#F08A5D6B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  view: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewDark: {
    width: 25,
    height: 25,
    borderRadius: 9999,
    // backgroundColor: '#F08A5D6B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerIcon: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 0,
    marginTop: 10,
    marginBottom: 0,
  },

  centerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  centerButtonText: {
    marginLeft: 60,
    fontSize: 17,
    marginTop: -36,
    borderBottomRightRadius: 10,
    borderRadius: 10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  avatarContainer: {
    position: 'relative',
    left: 20,
    end: 30,
    paddingBottom: 0,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoContainer: {
    position: 'relative',
    right: -40,
    top: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  themeSwitchContainer: {
    position: 'relative',
    paddingLeft: 335,
    top: -45,
    // marginHorizonal: 360,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DAE1E7',
    paddingVertical: 6,
    paddingHorizontal: 50,
    marginTop: -15,
    marginRight: 0,
    borderTopWidth: 2,
    borderTopColor: '#DAE1E7',
    borderBottomWidth: 2,
    borderBottomColor: '#DAE1E7',
    borderEndColor: '#DAE1E7',
    borderRadiusRight: 4,
    backgroundColor: '#DAE1E7',
  },

  selectedThemeButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#DAE1E7',
  },

  themeButtonText: {
    marginLeft: 10,
    color: 'black',
    fontSize: 17,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginRight: 0,
    paddingTop: 30,
    position: 'relative',
    alignContent: 'center',
    alignItems: 'center',
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
    //     ...Platform.select(
    //       ios: {
    //         shadowColor: 'rgba(0, 0, 0, 0.2)',
    //         shadowOffset: {
    //           width: 0,
    //           height: 2,
    //         },
    //         shadowOpacity: 1,
    //         shadowRadius: 2,

    //       android: {
    //         elevation: 2,
    //       },
    //     }),
  },
  next: {
    position: 'relative',
    paddingBottom: 50,
  },

  avatarButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 100,
    //marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  avatarButtonDark: {
    backgroundColor: '#52616B', // Цвет для темной темы
  },
});

export default Setting;
