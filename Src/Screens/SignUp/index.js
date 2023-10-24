import React, { useState } from 'react';
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


export default function SignUp(props) {
  const [checked, setChecked] = useState(false)

  return (
    <LinearGradient colors={['#02272B', '#022326']}
      // start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
      style={Styles.backgroundContainer}>
      <ImageBackground source={Images.background} style={Styles.backgroundContainer}>
        <StatusBar barStyle={'light-content'} />
        <View style={Styles.mainInnerWrap}>
          <View style={Styles.headerContainer}>
            <Text style={Styles.welcomeTitle}>{`Start the Journey`}</Text>
          </View>

          <View style={Styles.headerWrapper}>
            <TouchableOpacity onPress={() => { props.navigation.goBack() }}
              style={Styles.backContainer}>
              <Ionic
                name="add-circle-outline"
                size={24}
                style={{
                  color: Colors.green,
                }}
              />
              <Text style={Styles.descriptionView}>{`Having trouble?`}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { props.navigation.goBack() }}
              style={Styles.wrapContainer}>
              <Ionic
                name="person-circle-outline"
                size={24}
                style={{
                  color: Colors.grey,
                }}
              />
              <Text style={Styles.loginView}>{`login`}</Text>
            </TouchableOpacity>
          </View>

          <View style={Styles.mainContainer}>

            <Image source={Images.registerLogo} style={Styles.logo} />

          </View>
          <View style={Styles.bottomContainer}>

            <TouchableOpacity onPress={() => { props.navigation.navigate("") }}
              style={Styles.nextButton}>
              <View style={Styles.innerButton}>
                <Ionic
                  name="logo-google"
                  size={20}
                  style={{
                    color: Colors.white,
                  }}
                />
                <Text style={Styles.nextText}>{`Signup with Google`}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { props.navigation.navigate("") }}
              style={Styles.nextButton}>
              <View style={Styles.innerButton}>
                <Ionic
                  name="logo-facebook"
                  size={20}
                  style={{
                    color: Colors.white,
                  }}
                />
                <Text style={Styles.nextText}>{`Signup with Facebook`}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { props.navigation.navigate("") }}
              style={Styles.nextButton}>
              <View style={Styles.innerButton}>
                <Ionic
                  name="logo-apple"
                  size={20}
                  style={{
                    color: Colors.white,
                  }}
                />
                <Text style={Styles.nextText}>{`Signup with Apple`}</Text>
              </View>
            </TouchableOpacity>
          </View>


          <View style={Styles.buttonWrapper}>
            <View style={Styles.toogleWrapper}>
              <TouchableOpacity onPress={() => { setChecked(!checked) }}>
                <Ionic
                  name={checked == true ? "checkmark-circle-outline" : "ellipse-outline"}
                  size={26}
                  style={{
                    color: "rgba(5, 213, 135, 0.55)",
                  }}
                />
              </TouchableOpacity>
              <Text style={Styles.agreeText}>{`I agree to terms and services`}</Text>
            </View>

            <TouchableOpacity onPress={() => { props.navigation.navigate("Home") }}
              style={Styles.goButton}>
              <Text style={Styles.goText}>{`Go!`}</Text>
            </TouchableOpacity>
          </View>


        </View>
      </ImageBackground>
    </LinearGradient >
  );
}