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
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainInnerWrap: {
    flex: 1,
    backgroundColor: "rgba(12, 35, 40, 0.84)"
  },
  headerContainer: {
    width: widthScreen,
    alignSelf: 'center',
    height: hp(11),
    backgroundColor: Colors.parrot,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  headerWrapper: {
    marginTop: hp(3),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  wrapContainer: {
    alignItems: 'center'
  },
  welcomeTitle: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: 'Inter-Bold',
    textAlign: "center",
    marginBottom: hp(2)
  },
  logo: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    height: hp(40)
  },
  titleView: {
    fontSize: 28,
    color: Colors.white,
    fontFamily: 'Roboto-Medium',
    marginTop: hp(1.5)
  },
  descriptionView: {
    fontSize: 15,
    color: Colors.grey,
    fontFamily: 'Roboto-Medium',
    marginLeft: 10
  },
  loginView: {
    fontSize: 15,
    color: Colors.grey,
    fontFamily: 'Roboto-Medium',
    marginTop: 3
  },
  nextButton: {
    backgroundColor: Colors.darkGreen,
    width: widthScreen / 1.4,
    alignSelf: "center",
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2),
    borderRadius: 50
  },
  innerButton: {
    width: "55%",
    alignSelf: "center",
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextText: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: 'Roboto-Medium',
    marginLeft: hp(1.5)
  },
  bottomContainer: {
    flex: 0.3,
  },
  buttonWrapper: {
    flex: 0.2,
    justifyContent: "center"
  },
  goButton: {
    backgroundColor: Colors.parrot,
    width: widthScreen / 1.4,
    alignSelf: "center",
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: hp(2),
    borderRadius: 50,
    marginTop: hp(2),
  },
  goText: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: 'Roboto-Bold',
  },
  toogleWrapper: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(3),
  },
  agreeText: {
    fontSize: 16,
    color: Colors.grey,
    fontFamily: 'Roboto-Bold',
    marginLeft: hp(1.5)
  },
});
export default styles;