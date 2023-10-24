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
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    height: hp(40)
  },
  notifyAlert: {
    backgroundColor: "#FF5E77",
    width: 26,
    height: 26,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center"
  },
  notifyText: {
    fontSize: 12,
    color: Colors.white,
    fontFamily: 'Inter-Bold',
  },
  titleView: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: 'Inter-Bold',
  },
  refresh: {
    width: 26,
    height: 26,
  },
  scrollContainer: {
    marginTop: hp(2),
    marginBottom: hp(6)
  },
  descriptionView: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: 'Inter-Medium',
    marginTop: hp(1),
    width: "70%",
    alignSelf: 'center',
    textAlign: "center",
    lineHeight: 30
  },
  nextButton: {
    backgroundColor: "#00A479",
    width: hp(17),
    alignSelf: "center",
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  nextText: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: 'Inter-Medium',
  },
  topContainer: {
    marginTop: hp(3),
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listHead: {
    fontSize: 15,
    color: Colors.red,
    fontFamily: 'Roboto-Bold',
  },
  listMain: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center'
  },
  linerInnerWrap: {
    marginTop: hp(2),
    marginBottom: hp(2),
    width: "100%",
    alignSelf: "center",
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftIcon: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  seperateWrap: {
    marginLeft: hp(1.5)
  },
  listTitle: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: 'Roboto-Bold',
  },
  listDescription: {
    fontSize: 12,
    color: Colors.lightGrey,
    fontFamily: 'Roboto-Regular',
    marginTop: 5
  },
  userSeperateWrap: {
    marginLeft: hp(1),
    width: '80%',
  },
  userTextTitle: {
    fontSize: 12,
    color: Colors.white,
    fontFamily: 'Roboto-Regular',
    marginTop: 5
  },
});
export default styles;