import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
