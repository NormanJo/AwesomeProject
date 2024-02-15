import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 35,
    justifyContent: 'flex-end',
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#202020',
    paddingTop: 35,
    justifyContent: 'flex-end',
  },
  languageButton: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'column', // Изменено
    justifyContent: 'center',
  },
  languageFlagContainer: {
    width: 100,
    height: 100,
    marginTop: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  languageFlag: {
    width: '100%',
    height: '100%',
  },
  languageTextContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // languageText: {
  //   textAlign: 'left',
  // },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    width: '80%',
    borderRadius: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  languageSelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  languageItemFlag: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  iconContainer: {
    position: 'absolute',
    top: '50%',
    // left: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{translateX: -100}, {translateY: -100}],
  },
  middleContainer: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  resultContainer: {
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  resultTextLeft: {
    fontSize: 18,
    // textAlign: 'left',
  },
  resultTextRight: {
    fontSize: 18,
    textAlign: 'right',
  },
  resultTextLeft: {
    // textAlign: 'left',
    marginBottom: 10,
  },
  resultTextRight: {
    // textAlign: 'right',
    marginBottom: 10,
  },
});
export default styles;
