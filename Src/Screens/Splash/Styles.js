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
    backgroundColor: Colors.black,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 350,
    height: 350
  },
  logoTitle: {
    fontSize: 30,
    color: Colors.parrot,
    fontFamily: 'Inter-Bold',
  },
});
export default styles;