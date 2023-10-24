import React, { useEffect } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Styles from './Styles';
import Images from '../../Styles/Images';
import { LinearGradient } from 'expo-linear-gradient';
import Ionic from 'react-native-vector-icons/Ionicons';
import Colors from '../../Styles/Colors';

export default function PhishingAlert(props) {

  const phishingData = [
    {
      pic: Images.phishingItem1,
      title: `Lorem inspum`,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem`,
      color: `#E51737`,
    },
    {
      pic: Images.phishingItem2,
      title: `Lorem Ipsum is simply dummy`,
      description: `Lorem Ipsum is simply dummy text of the printing .`,
      color: `#0B935E`
    },
    {
      pic: Images.phishingItem2,
      title: `Lorem inspum`,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem`,
      color: `#0B935E`
    },
    {
      pic: Images.phishingItem1,
      title: `Lorem Ipsum is simply dummy`,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem`,
      color: `#0B935E`
    },
     {
      pic: Images.phishingItem1,
      title: `Lorem inspum`,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem`,
      color: `#E51737`,
    },
    {
      pic: Images.phishingItem2,
      title: `Lorem Ipsum is simply dummy`,
      description: `Lorem Ipsum is simply dummy text of the printing .`,
      color: `#0B935E`
    },
    {
      pic: Images.phishingItem2,
      title: `Lorem inspum`,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem`,
      color: `#0B935E`
    },

  ]

  return (
    <LinearGradient colors={['#00181D', '#00181D']}
      start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
      style={Styles.backgroundContainer}>
      <SafeAreaView style={Styles.safeAreaContainer}>
        <StatusBar barStyle={'light-content'} />

        <View style={Styles.headerWrapper}>
          <TouchableOpacity style={Styles.notifyAlert}>
            <Text style={Styles.notifyText}>{`1`}</Text>
          </TouchableOpacity>
          <Text style={Styles.titleView}>{`Phishing Alert`}</Text>
          <TouchableOpacity onPress={() => { props.navigation.navigate("Scanning") }}>
            <Image source={Images.refreshIcon} style={Styles.refresh} />
          </TouchableOpacity>
        </View>

        <View style={Styles.mainContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContainer}>

              <View style={Styles.topContainer}>
                <Image source={Images.phishingIcon} style={Styles.logo} />
              </View>

              <View style={Styles.headerWrapper}>
                <Text style={Styles.listHead}>{`Lorem inspum`}</Text>
                <Ionic
                  name="search-outline"
                  size={24}
                  style={{
                    color: Colors.white,
                  }}
                />

              </View>

              {
                phishingData?.map((item, keyID) => {
                  return (
                    <View key={keyID} style={Styles.listMain}>
                      <View style={Styles.linerInnerWrap}>
                        <Image source={item?.pic} style={Styles.leftIcon} />
                        <View style={Styles.userSeperateWrap}>
                          <Text style={[Styles.listTitle, { color: item?.color }]}>{item?.title}</Text>
                          <Text style={Styles.userTextTitle}>{item?.description}</Text>
                        </View>
                      </View>

                    </View>
                  )
                })
              }


            </View>
          </ScrollView>
        </View>

      </SafeAreaView>
    </LinearGradient>
  );
}