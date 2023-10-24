import React, { useEffect } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text
} from 'react-native';

import Styles from './Styles';
import Images from '../../Styles/Images';
import { LinearGradient } from 'expo-linear-gradient';
import Ionic from 'react-native-vector-icons/Ionicons';
import Colors from '../../Styles/Colors';

export default function Splash(props) {

  useEffect(() => {

    setTimeout(() => {
      props.navigation.navigate('Onboarding')
    },
      4000);
  }, []);

  return (

    <SafeAreaView style={Styles.safeAreaContainer}>
      <StatusBar barStyle={'light-content'} />

      <View style={Styles.mainContainer}>
        <Image source={{ uri: "https://s6.gifyu.com/images/S6ReP.gif" }} style={Styles.logo} />
      </View>

    </SafeAreaView>
  );
}
