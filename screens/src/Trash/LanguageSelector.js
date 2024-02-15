import React, {useState, useContext} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../Theme/colors';
import {ThemeContext} from '../Theme/ThemeContext';

const LanguageSelector = () => {
  const {dark, colors} = useContext(ThemeContext);
  const LanguageSelector = ({
    selectedLanguage,
    flagSource,
    name,
    onPress,
    marginLeft,
  }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 0.5,
            borderColor: 'white',
            borderRadius: 10,
            backgroundColor: colors.langua,
            padding: 10,
            // marginLeft: 20,
            marginTop: -45,
            width: 150,
            height: 40,
          }}>
          {selectedLanguage ? (
            <Image
              source={flagSource}
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
                marginVertical: -5,
              }}
            />
          ) : null}

          <Text style={{color: selectedLanguage ? colors.text : colors.text}}>
            {selectedLanguage ? selectedLanguage : name}
          </Text>
          <Ionicons
            name="chevron-down"
            size={15}
            color="black"
            style={{marginLeft: 10, marginTop: 0}}
          />
        </View>
      </TouchableOpacity>
    );
  };
};

export default LanguageSelector;
