import { StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundContainer: {
    width: widthScreen,
    height: heightScreen
  },
  safeAreaContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerWrapper: {
    marginTop: hp(3),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLogo: {
    width: 40,
    height: 40,
    marginRight: 5
  },
  logoTitle: {
    fontSize: 18,
    color: Colors.parrot,
    fontFamily: 'Inter-Medium',
    marginLeft: 5
  },
  profileWrapper: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    height: hp(35),
    justifyContent: 'center',
    alignItems: 'center'
  },
  userlogo: {
    width: hp(11),
    alignSelf: 'center',
    height: hp(11),
    borderRadius: hp(11),
    marginBottom: hp(3),
    marginTop: hp(6)
  },
  titleView: {
    fontSize: 22,
    color: Colors.white,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },

  nextButton: {
    backgroundColor: Colors.parrot,
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 54
  },
  nextText: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: 'Roboto-SemiBold',
  },
  descriptionView: {
    fontSize: 13,
    color: Colors.lightWhite,
    fontFamily: 'Inter-Medium',
    width: widthScreen / 1.45,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: hp(3),
    lineHeight: 22,
    marginBottom: hp(2),
  },
  linerInnerWrap: {
    marginTop: hp(2),
    marginBottom: hp(2),
    width: widthScreen / 1.2,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftIcon: {
    width: 49,
    height: 49,
    borderRadius: 49
  },
  seperateWrap: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  listTitle: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: 'Inter-Medium',
    marginLeft: hp(1.5)
  },
  line: {
    width: widthScreen,
    alignSelf: "center",
    height: hp(0.1),
    backgroundColor: "rgba(34, 243, 189, 0.15)",
  },
  deviceIcon: {
    width: 40,
    height: 40,
    tintColor: Colors.white
  },
  dataInnerWrap:{
    width: widthScreen / 1.45,
    alignSelf: 'center',
    marginBottom: hp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  numberText: {
    fontSize: 12,
    color: Colors.parrot,
    fontFamily: 'Inter-Medium',
    marginLeft: hp(1.5)
  },
  desText: {
    fontSize: 12,
    color: "rgba(19, 255, 193, 0.6)",
    fontFamily: 'Inter-Medium',
    marginLeft: 5
  },
  numberRed: {
    fontSize: 12,
    color: Colors.red,
    fontFamily: 'Inter-Medium',
    marginLeft: hp(1.5)
  },
  desRed: {
    fontSize: 12,
    color: "rgba(229, 23, 55, 0.6)",
    fontFamily: 'Inter-Medium',
    marginLeft: 5
  },
});
export default styles;