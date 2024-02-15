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

import ModalWindow from './ModalScreens/Account';
import ModalWindow1 from './ModalScreens/Language';
import ModalWindow2 from './ModalScreens/Privacy';
import ModalWindow3 from './ModalScreens/Notify';

const Setting = ({selectedTheme}) => {
  const [photo, setPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [circleColor, setCircleColor] = useState('#538ac0'); // Цвет по умолчанию
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
    setCircleColor(value ? '#454548' : '#538ac0');
    
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

  const renderModalContent = () => (
    <View style={modalStyle}>
      <Text style={styles.modalText}>Hello World!</Text>
      <TouchableOpacity
        style={[styles.button, styles.buttonClose]}
        onPress={() => setModalWindow(false)}>
        <Text style={styles.textStyle}>Hide Modal</Text>
      </TouchableOpacity>
    </View>
  );

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
                  color="white"
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.userInfoContainer}>
          <View style={styles.next}>
            <TouchableOpacity onPress={() => setModalWindow(true)}>
              <Ionicons
                name="chevron-forward-outline"
                size={25}
                color={colors.text}
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.userInfoText, {color: colors.text}]}>
            John Doe
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          style={[styles.itemContainer, {borderBottomColor: colors.border}]}
          onPress={() => setModalWindow1(true)}>
          <Ionicons
            name={selectedTheme === 'dark' ? 'language' : 'language-outline'}
            size={25}
            color={colors.text}
          />
          <Text style={[styles.itemText, {color: colors.text}]}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.itemContainer, {borderBottomColor: colors.border}]}
          onPress={() => setModalWindow2(true)}>
          <Ionicons
            name={
              selectedTheme === 'dark'
                ? 'shield-checkmark'
                : 'shield-checkmark-outline'
            }
            size={25}
            color={colors.text}
          />
          <Text style={[styles.itemText, {color: colors.text}]}>Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => setModalWindow3(true)}>
          <Ionicons
            name={
              selectedTheme === 'dark'
                ? 'notifications'
                : 'notifications-outline'
            }
            size={25}
            color={colors.text}
          />
          <Text style={[styles.itemText, {color: colors.text}]}>
            Notifications
          </Text>
        </TouchableOpacity>
        <View style={styles.themeContainer}>
          <Text style={[styles.themeText, {color: colors.text}]}>
            Dark Mode
          </Text>
          <ThemeSwitch
            value={selectedTheme === 'dark'}
            onValueChange={handleThemeChange}
          />
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalWindow}
        onRequestClose={closeModal}>
        <ModalWindow onClose={closeModal} />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalWindow1}
        onRequestClose={closeModal1}>
        <ModalWindow1 onClose={closeModal1} />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalWindow2}
        onRequestClose={closeModal2}>
        <ModalWindow2 onClose={closeModal2} />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalWindow3}
        onRequestClose={closeModal3}>
        <ModalWindow3 onClose={closeModal3} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
  },
  avatarContainer: {
    marginRight: 16,
  },
  avatarButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  userInfoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
  },
  itemText: {
    marginLeft: 16,
    fontSize: 16,
  },
  themeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  themeText: {
    fontSize: 16,
  },
});

export default Setting;
