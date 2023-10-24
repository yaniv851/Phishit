import React, { useEffect } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import Styles from './Styles';
import Images from '../../Styles/Images';
import { LinearGradient } from 'expo-linear-gradient';
import Ionic from 'react-native-vector-icons/Ionicons';
import Colors from '../../Styles/Colors';

export default function Scanning(props) {

  return (
    <LinearGradient colors={['#00181D', '#00181D']}
      start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
      style={Styles.backgroundContainer}>
      <SafeAreaView style={Styles.safeAreaContainer}>
        <StatusBar barStyle={'light-content'} />

        <View style={Styles.headerWrapper}>
          <TouchableOpacity>
            <Ionic
              name="search-outline"
              size={26}
              style={{
                color: Colors.white,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { props.navigation.navigate("Scanning") }}>
            <Ionic
              name="close-outline"
              size={32}
              style={{
                color: Colors.green,
                marginLeft: 20
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={Styles.mainContainer}>

          <View style={Styles.topContainer}>
            <Image source={Images.scanLogo} style={Styles.logo} />
          </View>
          
          <View style={Styles.bottomContainer}>
            <TouchableOpacity onPress={() => { props.navigation.navigate("PhishingAlert") }}
              style={Styles.nextButton}>
              <Text style={Styles.nextText}>{`Scan`}</Text>
            </TouchableOpacity>
          </View>

          

        </View>

      </SafeAreaView>
    </LinearGradient>
  );
}