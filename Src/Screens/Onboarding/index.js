import React, { useRef, useState } from 'react';
import { View, Image, Text, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import Styles from './Styles';
import { LinearGradient } from 'expo-linear-gradient';

const slides = [
  {
    key: 1,

  },
];

const userData = [
  {
    pic: Images.pic2,
    description: `got sus mail that looked so real like the bank is mailing me, the app saved me!`,
  },
  {
    pic: Images.pic1,
    description: `Someone sent me a sus link but because of the app I instantly understood that it’s phishing`,
  },
  {
    pic: Images.pic2,
    description: `got sus mail that looked so real like the bank is mailing me, the app saved me!`,
  },
]


export default function Onboarding(props) {
  let slider = useRef()
  const [engine, setEngine] = useState(3);
  const [speed, setSpeed] = useState(110);

  const [showRealApp, setRealApp] = useState(false);
  const [next, setNext] = useState(0);


  const _renderItem = ({ item }) => {
    return (
      <LinearGradient colors={['#022326', '#02272B']}
        style={Styles.backgroundContainer}>
        <SafeAreaView style={Styles.safeAreaContainer}>

          <Text style={Styles.welcomeTitle}>{`Welcome aboard!`}</Text>
          <ImageBackground source={Images.background} style={Styles.bacgroundContainer}>
            <View style={Styles.mainInnerWrap}>

              <LinearGradient colors={['rgba(14, 37, 39, 0)', '#0E2723']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={Styles.headerContainer}>
                <Image source={Images.onboardPic} style={Styles.onboardStyle} />
              </LinearGradient>
              {/* Data List 1 */}
              <LinearGradient colors={['#0D2522', '#102724']}
                style={Styles.topContainerWrap}>
                <View style={Styles.linerInnerWrap}>
                  <Image source={Images.secondIcon} style={Styles.leftIcon} />
                  <View style={Styles.seperateWrap}>
                    <Text style={Styles.listTitle}>{`A Comprehensive Guide to Technolgy`}</Text>
                    <Text style={Styles.listDescription}>{`Lorem Ipsum is simply dummy `}</Text>
                  </View>
                </View>

                <View style={Styles.linerInnerWrap}>
                  <Image source={Images.firstIcon} style={Styles.leftIcon} />
                  <View style={Styles.seperateWrap}>
                    <Text style={Styles.listTitle}>{`How we Make Technolgy Safe for You?`}</Text>
                    <Text style={Styles.listDescription}>{`Lorem Ipsum is simply dummy `}</Text>
                  </View>
                </View>

              </LinearGradient>
              {/* Data List 2 */}
              <LinearGradient colors={['#0D2522', '#102724']}
                style={Styles.userContainerWrap}>
                {
                  userData?.map((item, keyID) => {
                    return (
                      <View key={keyID} style={Styles.listMain}>
                        <View style={Styles.linerInnerWrap}>
                          <Image source={item?.pic} style={Styles.leftIcon} />
                          <View style={Styles.userSeperateWrap}>
                            <Text style={Styles.userTextTitle}>{item?.description}</Text>
                          </View>
                        </View>
                        {keyID == userData?.length - 1 ? null :
                          <View style={Styles.line} />}
                      </View>
                    )
                  })
                }

              </LinearGradient>


            </View>

          </ImageBackground>
        </SafeAreaView>
      </LinearGradient>
    );
  };
  const goNext = () => {
    setNext(next + 1)
    slider?.goToSlide(next + 1, true);
  };
  const RenderNextButton = () => {
    return (
      <TouchableOpacity onPress={() => { props.navigation.navigate("SignUp") }}
        style={Styles.nextButton}>
        <Text style={Styles.nextText}>{`Start The Journey`}</Text>
      </TouchableOpacity>
    );
  };
  const RenderDoneButton = () => {
    return (
      <TouchableOpacity onPress={() => { props.navigation.navigate("SignUp") }}
        style={Styles.nextButton}>
        <Text style={Styles.nextText}>{`Start The Journey`}</Text>
      </TouchableOpacity>
    );
  };
  const changeSlide = (e) => {
    setNext(e)
  };

  return (
    <AppIntroSlider
      ref={(ref) => (slider = ref)}
      onSlideChange={(e) => changeSlide(e)}
      renderItem={_renderItem}
      data={slides}
      bottomButton={true}
      renderNextButton={RenderNextButton}
      renderDoneButton={RenderDoneButton}
      dotStyle={{ backgroundColor: "transparent" }}
      activeDotStyle={{ backgroundColor: "transparent" }}
      dotClickEnabled={false}
    />
  );
}
