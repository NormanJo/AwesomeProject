import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';
import {ThemeContext} from './src/Theme/ThemeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Voice from '@react-native-voice/voice';
import Translator from 'react-native-translator';
import styles from './src/Style';

const Voice_to_text = () => {
  const languages = [
    {
      name: 'Английский',
      flag: require('../assets/flags/uk.png'),
      code: 'en',
      locale: 'en-US',
    },
    {
      name: 'Французский',
      flag: require('../assets/flags/france.png'),
      code: 'fr',
      locale: 'fr-FR',
    },
    {
      name: 'Испанский',
      flag: require('../assets/flags/spain.png'),
      code: 'es',
      locale: 'es-ES',
    },
    {
      name: 'Итальянский',
      flag: require('../assets/flags/italy.png'),
      code: 'it',
      locale: 'it-IT',
    },
    {
      name: 'Немецкий',
      flag: require('../assets/flags/germany.png'),
      code: 'de',
      locale: 'de-DE',
    },
    {
      name: 'Японский',
      flag: require('../assets/flags/japan.png'),
      code: 'ja',
      locale: 'ja-JP',
    },
    {
      name: 'Казахский',
      flag: require('../assets/flags/kz.png'),
      code: 'kk',
      locale: 'kk-KZ',
    },
    //{ name: 'Хохлятский', flag: require('../assets/flags/ukraine.png'), code: 'uk', locale: 'uk-UA' },
    {
      name: 'Русский',
      flag: require('../assets/flags/russia.png'),
      code: 'ru',
      locale: 'ru-RU',
    },
    {
      name: 'Корейский',
      flag: require('../assets/flags/korea.png'),
      code: 'ko',
      locale: 'ko-KR',
    },
    {
      name: 'Польский',
      flag: require('../assets/flags/poland.png'),
      code: 'pl',
      locale: 'pl-PL',
    },
    {
      name: 'Турецкий',
      flag: require('../assets/flags/turkey.png'),
      code: 'tr',
      locale: 'tr-TR',
    },
  ];
  const {dark} = useContext(ThemeContext);
  const containerStyle = dark ? styles.containerDark : styles.container; // Стили для контейнера
  const [modalVisible, setModalVisible] = useState(false); // Переменная для хранения состояния модального окна
  const [selectedLanguage1, setSelectedLanguage1] = useState(languages[0]); // Переменная для хранения выбранного языка
  const [selectedLanguage2, setSelectedLanguage2] = useState(languages[1]); // Переменная для хранения выбранного языка
  const [searchText, setSearchText] = useState(''); // Переменная для хранения текста поиска
  const [languageToSelect, setLanguageToSelect] = useState(null); // Переменная для хранения выбранного языка
  const [filteredLanguages, setFilteredLanguages] = useState(languages); // Переменная для хранения отфильтрованных языков
  const [error, setError] = useState(''); // Переменная для хранения ошибки
  const [isRecording, setIsRecording] = useState(false); // Переменная для хранения состояния записи
  const [isProcessing, setIsProcessing] = useState(false); // Переменная для хранения состояния процесса перевода
  const [translated, setTranslated] = useState(''); // Переменная для хранения переведенного текста
  const [statisticsContainerHeight, setStatisticsContainerHeight] =
    useState(120); // Высота контейнера со статистикой
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
  const [currentLanguageToSelect, setCurrentLanguageToSelect] = useState(1); // Переменная для хранения выбранного языка
  let nowLanguage = ''; // Переменная для хранения текущего языка
  const [displayMessages, setDisplayMessages] = useState([]);
  const [messages, setMessages] = useState([]); // Переменная для хранения сообщений
  const [currentLanguage, setCurrentLanguage] = useState(null);
  const [leftMessages, setLeftMessages] = useState([]);
  const [rightMessages, setRightMessages] = useState([]);

  function handleLanguageSelect(language) {
    if (languageToSelect === 1) {
      if (selectedLanguage2 && language.name === selectedLanguage2.name) {
        swapLanguages();
      } else {
        setSelectedLanguage1(language);
        setSelectedLanguage1Id(language.code);
        setSelectedLanguage1Locale(language.locale);
        setCurrentLanguage(1);
      }
    } else if (languageToSelect === 2) {
      if (selectedLanguage1 && language.name === selectedLanguage1.name) {
        swapLanguages();
      } else {
        setSelectedLanguage2(language);
        setSelectedLanguage2Id(language.code);
        setSelectedLanguage2Locale(language.locale);
        setCurrentLanguage(2);
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

  useEffect(() => {
    const height = selectedLanguage1 && selectedLanguage2 ? 150 : 120;
    setStatisticsContainerHeight(height);

    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, [selectedLanguage1, selectedLanguage2]);

  const onSpeechStart = () => setIsRecording(true);
  const onSpeechEnd = () => setIsRecording(false);
  const onSpeechError = error => setError(error);

  const startRecording = async () => {
    try {
      setIsProcessing(true);
      const currentLanguage = nowLanguage;
      await Voice.start(currentLanguage);
      console.log('Начало запись на языке', currentLanguage);
    } catch (err) {
      setError(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const stopRecording = async () => {
    try {
      setIsProcessing(true);
      if (isRecording) {
        await Voice.stop();
        setIsRecording(false); // Обнуляем состояние записи
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePress = languageToSelect => {
    console.log(`handlePress: languageToSelect=${languageToSelect}`);

    if (isProcessing) {
      return;
    }

    if (isRecording) {
      stopRecording();
    } else {
      let selectedLanguage = null;

      if (languageToSelect === 1) {
        selectedLanguage = selectedLanguage1;
      } else if (languageToSelect === 2) {
        selectedLanguage = selectedLanguage2;
      }

      if (selectedLanguage) {
        nowLanguage = selectedLanguage.locale;
        setCurrentLanguage(languageToSelect);
        console.log(`handlePress: selectedLanguage1=${selectedLanguage1.name}`);
        console.log(`handlePress: selectedLanguage2=${selectedLanguage2.name}`);

        startRecording();
      }
    }
  };

  const onSpeechResults = result => {
    const language = nowLanguage; // Get the recognized language from the result object
    let currentLanguage = null;
    if (language === selectedLanguage1.locale) {
      currentLanguage = 1;
    } else if (language === selectedLanguage2.locale) {
      currentLanguage = 2;
    }
    console.log(`onSpeechResults: language=${language}`);
    console.log(
      `onSpeechResults: selectedLanguage1.locale=${selectedLanguage1.locale}`,
    );
    console.log(
      `onSpeechResults: selectedLanguage2.locale=${selectedLanguage2.locale}`,
    );
    console.log(`handlePress: nowLanguage=${nowLanguage}`);
    console.log(`startRecording: nowLanguage=${nowLanguage}`);
    console.log(`stopRecording: nowLanguage=${nowLanguage}`);

    console.log(`onSpeechResults: currentLanguage=${languageToSelect}`);
    const newMessage = {text: result.value[0], language: currentLanguage};
    setDisplayMessages(prevDisplayMessages => [
      ...prevDisplayMessages,
      newMessage,
    ]);
  };

  const renderMessageLeft = (message, index) => {
    const containerStyle = styles.messageContainerLeft;
    const textStyle = styles.resultTextLeft;

    return (
      <View key={index} style={[styles.messageContainer, containerStyle]}>
        <Text style={textStyle}>{message.text}</Text>
      </View>
    );
  };

  const renderMessageRight = (message, index) => {
    const containerStyle = styles.messageContainerRight;
    const textStyle = styles.resultTextRight;

    return (
      <View key={index} style={[styles.messageContainer, containerStyle]}>
        <Text style={textStyle}>{message.text}</Text>
      </View>
    );
  };

  const renderMessage = (message, index) => {
    if (currentLanguage === 1) {
      return renderMessageLeft(message, index);
    } else if (currentLanguage === 2) {
      return renderMessageRight(message, index);
    }
  };

  useEffect(() => {
    if (displayMessages.length > 0) {
      const lastMessage = displayMessages[displayMessages.length - 1];
      setCurrentLanguageToSelect(lastMessage.language);
    }
  }, [displayMessages]);

  return (
    <View style={containerStyle}>
      <ScrollView>
        <View style={styles.middleContainer}>
          <View style={styles.resultContainer}>
            {displayMessages.map(renderMessage)}
          </View>
        </View>
      </ScrollView>
      <View style={styles.languageSelectionContainer}>
        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => handlePress(1)}
          disabled={isProcessing}>
          <View style={styles.languageFlagContainer}>
            {selectedLanguage1 ? (
              <Image
                source={selectedLanguage1.flag}
                style={styles.languageFlag}
              />
            ) : null}
          </View>
          <TouchableOpacity
            onPress={() => {
              setLanguageToSelect(1);
              setModalVisible(true);
            }}
            style={styles.languageTextContainer}>
            <Text style={styles.languageText}>
              {selectedLanguage1 ? selectedLanguage1.name : 'Выберите язык'}
            </Text>
            <Ionicons
              name="chevron-down-outline"
              size={25}
              style={{width: 20, height: 20, marginLeft: 5, color: 'black'}}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => handlePress(2)}
          disabled={isProcessing}>
          <View style={styles.languageFlagContainer}>
            {selectedLanguage2 ? (
              <Image
                source={selectedLanguage2.flag}
                style={styles.languageFlag}
              />
            ) : null}
          </View>
          <TouchableOpacity
            onPress={() => {
              setLanguageToSelect(2);
              setModalVisible(true);
            }}
            style={styles.languageTextContainer}>
            <Text style={styles.languageText}>
              {selectedLanguage2 ? selectedLanguage2.name : 'Выберите язык'}
            </Text>
            <Ionicons
              name="chevron-down-outline"
              size={25}
              style={{width: 20, height: 20, marginLeft: 5, color: 'black'}}
            />
          </TouchableOpacity>
        </TouchableOpacity>
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

export default Voice_to_text;
