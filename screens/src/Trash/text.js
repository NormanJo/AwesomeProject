import React, {useState, useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
  Platform,
  Clipboard,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from './src/Theme/colors';
import {ThemeContext} from './src/Theme/ThemeContext';
import Translator from 'react-native-translator';
import Tts from 'react-native-tts';
import ImagePicker from 'react-native-image-picker';
import languages from './src/Trash/Languages';
import {styles} from './src/Styles/TestStyles';

const LanguageListItem = ({language, flag, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#EAEAEA',
          borderRadius: 10,
          padding: 10,
          marginVertical: 5,
          marginBottom: 5,
          width: 335,
          marginLeft: 20,
        }}>
        <Image source={flag} style={{width: 30, height: 30, marginRight: 10}} />
        <Text style={{fontSize: 20, textAlign: 'left'}}>{language}</Text>
      </View>
    </TouchableOpacity>
  );
};

const LanguageListItem2 = ({language, flag, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#EAEAEA',
          borderRadius: 10,
          padding: 10,
          marginVertical: 5,
          marginBottom: 5,
          width: 335,
          marginLeft: 20,
        }}>
        <Image source={flag} style={{width: 30, height: 30, marginRight: 10}} />
        <Text style={{fontSize: 20, textAlign: 'left'}}>{language}</Text>
      </View>
    </TouchableOpacity>
  );
};
const TextScreen = () => {
  const {dark, colors} = useContext(ThemeContext);

  const containerStyle = dark ? styles.containerDark : styles.container;

  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputValue1, setTextInputValue1] = useState('');
  const [textInputValue2, setTextInputValue2] = useState('');
  const [translated, setTranslated] = useState('');
  const [languageToSelect, setLanguageToSelect] = useState(null); // Переменная для хранения выбранного языка
  const [selectedLanguage1, setSelectedLanguage1] = useState(languages[0]); // Переменная для хранения выбранного языка
  const [selectedLanguage2, setSelectedLanguage2] = useState(languages[1]); // Переменная для хранения выбранного языка
  const [searchText, setSearchText] = useState(''); // Переменная для хранения текста поиска
  const [filteredLanguages, setFilteredLanguages] = useState(languages); // Переменная для хранения отфильтрованных языков
  const [selectedLanguage1Id, setSelectedLanguage1Id] = useState(
    selectedLanguage1.code,
  ); // Переменная для хранения id выбранного языка
  const [selectedLanguage1Locale, setSelectedLanguage1Locale] = useState(
    selectedLanguage1.locale,
  );
  const [selectedLanguage2Id, setSelectedLanguage2Id] = useState(
    selectedLanguage2.code,
  ); // Переменная для хранения id выбранного языка
  const [selectedLanguage2Locale, setSelectedLanguage2Locale] = useState(
    selectedLanguage2.locale,
  ); // Переменная для хранения локали выбранного языка

  //пакет языков

  function handleLanguageSelect(language) {
    if (languageToSelect === 1) {
      if (selectedLanguage1 && language.name === selectedLanguage1.name) {
        swapLanguages();
      } else {
        setSelectedLanguage1(language);
        setSelectedLanguage1Id(language.code);
        setSelectedLanguage1Locale(language.locale);
      }
    } else if (languageToSelect === 2) {
      if (selectedLanguage2 && language.name === selectedLanguage2.name) {
        swapLanguages();
      } else {
        setSelectedLanguage2(language);
        setSelectedLanguage2Id(language.code);
        setSelectedLanguage2Locale(language.locale);
      }
    }
    setModalVisible(false);
  }

  function swapLanguages() {
    const tempLanguage = selectedLanguage1;
    const tempLanguageId = selectedLanguage1Id;
    const tempLanguageLocale = selectedLanguage1Locale;

    setSelectedLanguage1(selectedLanguage2);
    setSelectedLanguage1Id(selectedLanguage2Id);
    setSelectedLanguage1Locale(selectedLanguage2Locale);

    setSelectedLanguage2(tempLanguage);
    setSelectedLanguage2Id(tempLanguageId);
    setSelectedLanguage2Locale(tempLanguageLocale);
  }

  function handleSearch(text) {
    setSearchText(text);
    const filtered = languages.filter(language =>
      language.name.toLowerCase().startsWith(text.toLowerCase()),
    );
    setFilteredLanguages(filtered);
  }

  async function translateText() {
    if (selectedLanguage1 && selectedLanguage2 && textInputValue1) {
      const from = selectedLanguage1.code;
      const to = selectedLanguage2.code;
      const text = textInputValue1;
      try {
        const translatedText = await Translator.translate(text, from, to);
        setTranslated(translatedText);
        setTextInputValue2(translatedText);
      } catch (error) {
        console.log(error);
      }
    }
  }

  function speakText(text, code) {
    if (code === 1) Tts.speak(text, {language: selectedLanguage1Locale});
    else if (code === 2) Tts.speak(text, {language: selectedLanguage2Locale});
  }

  return (

    
    <View style={containerStyle}>
      <StatusBar 
      backgroundColor="white" 
      barStyle="default" />
      <View
        style={{
          marginLeft: 10,
          marginTop: 20,
          marginRight: 10,
          color: 'black',
        }}>
        <View
          style={{
            // height: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 50,
            width: 370,
            borderRadius: 10,
            // marginLeft: 400,
            // marginVerticalL: 0,
            // marginHorizontal: 400,
            borderBottomColor: 'orange',
            alignSelf: 'center',
            opacity: 0.3,
          }}></View>
        <View style={{color: colors.text}}>
          <TouchableOpacity
            onPress={() => {
              const temp = selectedLanguage1;
              setSelectedLanguage2(selectedLanguage2);
              setSelectedLanguage2(temp);
            }}>
            <Ionicons
              name="swap-horizontal-outline"
              size={25}
              style={{
                color: colors.text,
                justifyContent: 'space-between',
                marginHorizontal: 170,
                marginTop: -40,
                marginVertical: 10,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{color: colors.text}}>
          <TouchableOpacity
            onPress={() => {
              const temp = selectedLanguage1;
              setSelectedLanguage2(selectedLanguage2);
              setSelectedLanguage2(temp);
            }}>
            <Ionicons
              name="chevron-down"
              size={25}
              style={{
                color: colors.text,
                justifyContent: 'space-between',
                marginHorizontal: 1240,
                marginTop: -40,
                marginVertical: 10,
              }}
            />
          </TouchableOpacity>
        </View>

        {
          <TouchableOpacity //ЛЕВЫЙ ВЫБОР
            onPress={() => {
              setLanguageToSelect(1);
              setModalVisible(true);
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                borderWidth: 0.5,
                borderColor: 'white',
                borderRadius: 10,
                backgroundColor: colors.langua,
                padding: 10,

                // marginVertical: -20,
                // marginHorizontal: 255,

                marginLeft: 5,
                marginTop: -45,
                width: 150,
                height: 40,
              }}
              contentContainerStyle={{
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}>
              {selectedLanguage1 ? (
                <Image
                  source={selectedLanguage1.flag}
                  style={{
                    width: 30,
                    height: 30,
                    marginRight: 10,
                    marginVertical: -5,
                  }}
                />
              ) : null}

              <Text
                style={{
                  color: selectedLanguage1 ? colors.text : colors.text,
                }}>
                {selectedLanguage1 ? selectedLanguage1.name : 'Выбрать язык'}
              </Text>
              <Ionicons
                name="chevron-down"
                size={15}
                color="black"
                style={{marginLeft: 10, marginTop: 0}}
              />
            </View>
          </TouchableOpacity>
        }

        {
          <TouchableOpacity //ПРАВЫЙ ВЫБОР
            onPress={() => {
              setLanguageToSelect(2);
              setModalVisible(true);
            }}>
            <View
              style={{
                flexDirection: 'row',
                // alignItems: 'flex-start',
                borderWidth: 0.5,
                borderColor: 'white',
                backgroundColor: colors.langua,
                borderRadius: 10,
                padding: 10,
                // marginVertical: -20,
                // marginHorizontal: 255,
                marginLeft: 218,
                marginTop: -45,
                width: 150,
                height: 40,
              }}
              contentContainerStyle={{
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}>
              {selectedLanguage2 ? (
                <Image
                  source={selectedLanguage2.flag}
                  style={{
                    width: 30,
                    height: 30,
                    marginRight: 10,
                    marginVertical: -5,
                  }}
                />
              ) : null}
              <Text
                style={{color: selectedLanguage2 ? colors.text : colors.text}}>
                {selectedLanguage2 ? selectedLanguage2.name : 'Выбрать язык'}
              </Text>
              <Ionicons
                name="chevron-down"
                size={15}
                color="black"
                style={{marginLeft: 10, marginTop: 0}}
              />
            </View>
          </TouchableOpacity>
        }

        <View style={{height: 300, position: 'relative'}}>
          <Translator
            from={selectedLanguage1.code}
            to={selectedLanguage2.code}
            value={textInputValue1}
            onTranslated={t => setTranslated(t)}
          />
          {
            <TextInput
              style={{
                marginBottom: 5,
                paddingStart: 15,
                paddingVertical: 20,
                paddingLeft: 23,
                paddingRight: 23,
                paddingBottom: 40,
                fontSize: 17,
                width: 356,
                borderWidth: 0,
                borderRadius: 10,
                height: 250,
                marginLeft: 10,
                marginRight: 10,
                backgroundColor: 'black',
                textAlignVertical: 'top',
                color: 'orange',
                opacity: 0.3,
              }}
              value={textInputValue1}
              onChangeText={value => {
                setTextInputValue1(value);
                translateText();
              }}
              placeholder="Введите текст"
              placeholderTextColor={'white'}
              multiline={true}
            />
          }
          {/* <View
            style={{
              position: 'absolute',
              bottom: 80,
              left: 10,
              right: 0,
              height: 2,
              width: 375,
              backgroundColor: colors.background,
            }}
          /> */}
          {/* <TouchableOpacity
            style={{position: 'absolute', top: '90%', left: 20}}
            onPress={() => speakText(textInputValue1, 1)}>
            <Ionicons
              name="volume-medium-outline"
              size={25}
              style={{color: '#212121', bottom: 50}}
            />
          </TouchableOpacity> */}
          {/* <TouchableOpacity //КНОПКА КАМЕРЫ
            style={{position: 'absolute', top: '90%', right: 20}}
            onPress={() => openCamera()}>
            <Ionicons
              name="camera-outline"
              size={25}
              style={{
                color: '#212121',
                justifyContent: 'space-between',
                marginHorizontal: 0,
                marginTop: 0,
                bottom: 50,
              }}
            />
          </TouchableOpacity> */}
          {/* <TouchableOpacity
            style={{position: 'absolute', top: '90%', right: 50}}>
            <Ionicons
              name="copy-outline"
              size={25}
              style={{color: '#212121', bottom: 50}}
            />
          </TouchableOpacity> */}
          {/* <View style={{height: 300, position: 'relative'}}> */}
          {/* <TextInput //НИЖНИЕ ТЕКТОВОЕ ПОЛЕ
              style={{
                paddingStart: 15,
                paddingVertical: 20,
                paddingLeft: 23,
                paddingRight: 23,
                paddingBottom: 40,
                fontSize: 17,
                borderWidth: 0,
                borderRadius: 10,
                height: 250,
                marginLeft: 10,
                marginRight: 10,
                backgroundColor: colors.avatar,
                textAlignVertical: 'top',
                color: 'white',
              }}
              value={translated}
              onChangeText={value => {
                setTranslated(value);
                setTextInputValue2(value);
              }}
              placeholder="Введите текст"
              placeholderTextColor={'white'}
              multiline={true}
            /> */}
          {/* <View //Полоска
              style={{
                position: 'absolute',
                bottom: 80,
                left: 10,
                right: 0,
                height: 2,
                width: 375,

                backgroundColor: colors.background,
              }}
            /> */}
          {/* <TouchableOpacity
              style={{position: 'absolute', top: '90%', left: 20}}
              onPress={() => speakText(textInputValue2, 2)}>
              <Ionicons
                name="volume-medium-outline"
                size={25}
                style={{color: '#212121', bottom: 50}}
              />
            </TouchableOpacity>

            <TouchableOpacity //КНОПКА ПРОСЛУШИВАНИЕ ТЕКСТА
              style={{position: 'absolute', top: '90%', right: 20}}
              onPress={() => console.log('Открытие камеры')}>
              <Ionicons
                name="camera-outline"
                size={25}
                style={{
                  color: '#212121',
                  // justifyContent: 'space-between',
                  // marginHorizontal: 0,
                  // marginTop: 0,
                  bottom: 50,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{position: 'absolute', top: '90%', right: 50}}>
              <Ionicons
                name="copy-outline"
                size={25}
                style={{
                  color: '#212121',
                  // justifyContent: 'space-between',
                  // marginHorizontal: 0,
                  // marginTop: 0,
                  bottom: 50,
                }}
              /> */}
          {/* </TouchableOpacity> */}
          {/* </View> */}

          {/* <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              <View
                style={{
                  backgroundColor: colors.background,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}>
                {languages.map(language => (
                  <LanguageListItem
                    key={language.name}
                    language={language.name}
                    flag={language.flag}
                    onPress={() => {
                      setLanguageToSelect(1);
                      setModalVisible(true);
                       }}
                    //style={{ backgroundColor: 'red', color: 'red' }}
                  />
                ))}
              </View>
            </View>
          </Modal> */}
          {/* <Modal
            visible={modalVisible2}
            animationType="slide"
            transparent={true}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                backgroundColor: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}>
              <View
                style={{
                  backgroundColor: colors.background,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}>
                {languages.map(language => (
                  <LanguageListItem2
                    key={language.name}
                    language={language.name}
                    flag={language.flag}
                    onPress={() => {
                      setLanguageToSelect(1);
                      setModalVisible(true);
                       }}
                    //style={{ backgroundColor: '#8785A2', color: '#8785A2' }}
                  />
                ))}
              </View>
            </View>
          </Modal> */}
        </View>
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.searchInput}
              placeholder="Поиск языка"
              value={searchText}
              onChangeText={handleSearch}
            />
            {filteredLanguages.map(language => (
              <TouchableOpacity
                key={language.name}
                style={styles.languageItem}
                onPress={() => handleLanguageSelect(language)}>
                <Image source={language.flag} style={styles.languageItemFlag} />
                <Text>{language.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TextScreen;
