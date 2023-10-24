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

export default function Home(props) {

  return (
    <LinearGradient colors={['#02272B', '#022326']}
      start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
      style={Styles.backgroundContainer}>
      <SafeAreaView style={Styles.safeAreaContainer}>
        <StatusBar barStyle={'light-content'} />

        <View style={Styles.headerWrapper}>
          <Image source={Images.logo} style={Styles.headerLogo} />
          <Text style={Styles.logoTitle}>{`Phishit`}</Text>
        </View>

        <View style={Styles.mainContainer}>
          <ImageBackground source={Images.profileBackground} style={Styles.profileWrapper} >
            <View style={Styles.mainContainer}>
              <Image source={Images.pic3} style={Styles.userlogo} />
              <Text style={Styles.titleView}>{`Med Henry`}</Text>
            </View>
          </ImageBackground>

          <Text style={Styles.descriptionView}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.`}</Text>

          <View style={Styles.dataInnerWrap}>
            <View style={Styles.seperateWrap}>
              <Text style={Styles.numberText}>{`100`}</Text>
              <Text style={Styles.desText}>{`Messseges`}</Text>
            </View>
            <TouchableOpacity onPress={() => { props.navigation.navigate("PhishingAlert") }}
             style={Styles.seperateWrap}>
              <Text style={Styles.numberRed}>{`8`}</Text>
              <Text style={Styles.desRed}>{`Phising`}</Text>
            </TouchableOpacity>
            <View style={Styles.seperateWrap}>
              <Text style={Styles.numberText}>{`92`}</Text>
              <Text style={Styles.desText}>{`Normal`}</Text>
            </View>
          </View>

          <View style={Styles.line} />

          <View style={Styles.linerInnerWrap}>
            <View style={Styles.seperateWrap}>
              <Image source={Images.lock} style={Styles.leftIcon} />
              <Text style={Styles.listTitle}>{`Edit profile`}</Text>
            </View>
          </View>

          <View style={Styles.line} />

          <View style={Styles.linerInnerWrap}>
            <View style={Styles.seperateWrap}>
              <Image source={Images.logo} style={Styles.deviceIcon} />
              <Text style={Styles.listTitle}>{`Search device for phishing`}</Text>
            </View>
            <TouchableOpacity onPress={() => { props.navigation.navigate("Scanning") }}
              style={Styles.nextButton}>
              <Ionic
                name="search-outline"
                size={24}
                style={{
                  color: Colors.white,
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={Styles.line} />

        </View>

      </SafeAreaView>
    </LinearGradient>
  );
}