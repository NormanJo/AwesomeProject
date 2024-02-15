// styles.js
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 0,
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#202020',
    paddingTop: 0,
  },

  safeArea: {
    flex: 1,
  },

  centerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  centerButtonText: {
    marginLeft: 100,
    fontSize: 17,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 0,
  },
  avatarContainer: {
    position: 'absolute',
    left: 20,
    top: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoContainer: {
    position: 'absolute',
    right: 30,
    top: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  themeSwitchContainer: {
    marginTop: 100,
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
  },

  nickname: {
    fontSize: 17,
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
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarButtonDark: {
    backgroundColor: '#52616B', // Цвет для темной темы
  },
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
    textColor: 'black',
  },
  languageItemFlag: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
