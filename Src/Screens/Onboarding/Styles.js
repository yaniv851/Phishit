import { StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import Metrics from '../../Styles/Metrices';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;


const styles = StyleSheet.create({
  backgroundContainer: {
    width: widthScreen,
    height: heightScreen,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "rgba(12, 35, 40, 0.74)"
  },
  mainContainer: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
  },
  bacgroundContainer: {
    width: widthScreen * 1.12,
    height: heightScreen / 1.32,
    alignSelf: "center"
  },
  mainInnerWrap: {
    flex: 1,
    backgroundColor: "rgba(12, 35, 40, 0.74)"
  },
  welcomeTitle: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: 'Inter-Bold',
    textAlign: "center",
    marginBottom: hp(4),
    marginTop: hp(2)
  },
  headerContainer: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    borderWidth: 1,
    borderTopColor: "rgba(5, 213, 135, 0.15)",
    borderRadius: 7,
  },
  onboardStyle: {
    width: 157,
    height: 146,
    alignSelf: 'flex-end',
    marginRight: hp(5),
    marginTop: hp(2),
    marginBottom: hp(2)
  },
  topContainerWrap: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    backgroundColor: '#0D2522',
    borderRadius: 7,
    marginTop: hp(-1.5),
    shadowColor: '#0D2522',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  nextButton: {
    backgroundColor: Colors.parrot,
    width: hp(30),
    alignSelf: "center",
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: hp(1),
    borderRadius: 50
  },
  nextText: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: 'Roboto-Bold',
  },
  introFirstImage: {
    width: '75%',
    height: 300,
  },
  listMain: {
    width: "90%",
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
    width: 49,
    height: 49,
    borderRadius: 49
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
  userImageWrap: {
    flex: 1,
    backgroundColor: "rgba(34, 243, 189, 0.15)",
    borderRadius: 50
  },
  userContainerWrap: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    backgroundColor: '#0D2522',
    borderRadius: 7,
    marginTop: hp(1),
    shadowColor: '#0D2522',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  line: {
    width: "100%",
    alignSelf: "center",
    height: hp(0.1),
    backgroundColor: "rgba(34, 243, 189, 0.15)",
  },
  userTextTitle: {
    fontSize: 15,
    color: Colors.white,
    fontFamily: 'Roboto-Bold',
    lineHeight: 22

  },
  userSeperateWrap: {
    marginLeft: hp(1.5),
    width: '80%',
  },

});
export default styles;
