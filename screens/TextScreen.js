import React, {useState, useContext} from 'react';
import {SafeAreaView,ScrollView,View,StyleSheet,Text,TouchableOpacity,onPress,Image,TextInput} from 'react-native';
import languages from './src/Trash/Languages';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Translator from 'react-native-translator';
import { Input } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';


export default function Example() {

  
  const onPressSave = () => {
    // Функция кнопки
    console.log('Save button pressed');
  };

  const onPressHistory = () => {
    // Функция кнопки
    console.log('History button pressed');
  };

  const [originalText, setOriginalText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslation = () => {
    // Здесь вы можете добавить логику для перевода текста
    // и установки переведенного текста в translatedText
  };

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
    else if (code === 2) Tts.speak(Text, {language: selectedLanguage2Locale});
  }
 
  const [inputText, setInputText] = useState('');
  const handleContentSizeChange = (contentWidth, contentHeight) => {
    // Обновляем высоту текстовых полей на основе размера содержимого
    const minHeight = 40; // Минимальная высота текстового поля
    const newHeight = Math.max(minHeight, contentHeight);
    setHeight(newHeight);
  };
  const [height, setHeight] = useState(40);
  return (
    <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Переводчик текста</Text>
         
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: -30 }}>
            <TouchableOpacity onPress={onPressSave}>
              <Image
                source={require('awesomeproject/assets/text/save.png')}

                style={{
                  width: 25,
                  height: 25,
                  marginLeft: 330, 
                  
                }}
              />
            </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: -25 }}>
            <TouchableOpacity onPress={onPressHistory}>
              <Image
                source={require('awesomeproject/assets/text/history.png')}
                style={{
                  width: 28,
                  height: 28,
                  marginLeft: 290, 
                }}
              />
            </TouchableOpacity>
          </View>

                
        {
          <View>
          <TouchableOpacity //ЛЕВЫЙ ВЫБОР
            onPress={() => {
              setLanguageToSelect(1);
              setModalVisible(true);
            }}>
            <View
              style={{
                flexDirection: 'row',
                borderColor: '#f2f2f2',
                backgroundColor: '#f2f2f2',
                paddingRight: 10,
                // marginRight:-218,
                marginTop : 10,
                paddingTop:7,
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
                    width: 25,
                    height: 25,
                    marginRight: 10,
                    marginVertical: -3,
                  }}
                />
              ) : null}
              <Text
                style={{
                  color: selectedLanguage1 ? 'black' : 'black',
                }}>
                {selectedLanguage1 ? selectedLanguage1.name : 'Выбрать язык'}
              </Text>
              <Image
                source={require('awesomeproject/assets/text/chevron.png')}
                style={{
                  width: 10,
                  height: 10,
                  marginLeft: 5, 
                  marginVertical:5,
                  tintColor: 'grey',
                }}
              />
            </View>
          </TouchableOpacity>
          </View>
          }
<View>
          <TouchableOpacity
            onPress={() => {
              const temp = selectedLanguage1;
              setSelectedLanguage2(selectedLanguage2);
              setSelectedLanguage2(temp);
            }}>
              
            <Image
                source={require('awesomeproject/assets/text/swap.png')}
                style={{
                  width: 25,
                  height: 25,
                  marginHorizontal:150,
                  marginVertical:-34,
                  tintColor:'#454c5a',
                  alignItems: "center",
                 
                }}
              />
          </TouchableOpacity>
        </View>
        <View style={{color: 'black'}}>
          <TouchableOpacity
            onPress={() => {
              const temp = selectedLanguage1;
              setSelectedLanguage2(selectedLanguage2);
              setSelectedLanguage2(temp);
            }}>
          </TouchableOpacity>
        </View> 
</View>

         {
          <View>
          <TouchableOpacity //ПРАВЫЙ ВЫБОР
            onPress={() => {
              setLanguageToSelect(2);
              setModalVisible(true);
            }}>
            <View
              style={{
                flexDirection: 'row',
                borderColor: '#f2f2f2',
                backgroundColor: '#f2f2f2',
                paddingLeft: 10,
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
                    width: 25,
                    height: 25,
                    marginRight: 10,
                    marginVertical: -2,
                  }}
                />
              ) : null}
              <Text
                style={{color: selectedLanguage2 ? 'black' : 'black'}}>
                {selectedLanguage2 ? selectedLanguage2.name : 'Выбрать язык'}
              </Text>
              <Image
                source={require('awesomeproject/assets/text/chevron.png')} 
                style={{
                  width: 10,
                  height: 10,
                  marginLeft: 5, 
                  marginVertical:5,
                  tintColor: 'grey',
                }}
              />
            </View>
          </TouchableOpacity>
          </View>
        }

<ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <TextInput
        style={[styles.input, { height }]}
        placeholder="Введите текст"
        placeholderTextColor="#aaa"
        onChangeText={(text) => setInputText(text)}
        multiline={true}
        onContentSizeChange={(e) => handleContentSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)}
      />

      {inputText ? (
         <TextInput
         style={{...styles.output, color: 'black'}}
          value={` ${inputText}`}
          editable={false}
          multiline={true}
          onContentSizeChange={(e) => handleContentSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)}
        />
      ) : null}
    </ScrollView>

    
 {/* 
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
            />} */}

{/* </View> */}

        </ScrollView>
      </SafeAreaView>
  );

}
const styles = StyleSheet.create({
  
  input: {
    height: 30,
    marginTop:-20,
    borderColor: '#ffff',
    borderWidth: 1,
    padding: 10,
    backgroundColor:'#ffff'
  },
  output: {
    height: 40,
    borderColor: '#eaedf6',
    padding: 10,
    backgroundColor: '#eaedf6', 
  },
  container: {
    paddingVertical: 10,
  },
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  title: {
    flex:1,
    fontSize: 20,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  /** Profile */
  profile: {
    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    color: '#090909',
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '400',
    color: '#848484',
  },
  profileAction: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  /** Section */
  section: {
    paddingTop: 12,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#a7a7a7',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  sectionBody: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  /** Row */
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 24,
    height: 50,
  },
  rowWrapper: {
    paddingLeft: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },
  rowIcon: {
    marginRight: 12,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    fontSize: 17,
    color: '#616161',
    marginRight: 4,
  },
});


