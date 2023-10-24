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
    justifyContent: "flex-end"
  },
  logo: {
    width: widthScreen,
    alignSelf: 'center',
    height: hp(70)
  },
  titleView: {
    fontSize: 28,
    color: Colors.white,
    fontFamily: 'Inter-SemiBold',
    marginTop: hp(1.5)
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
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
export default styles;