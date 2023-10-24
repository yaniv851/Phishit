import React, { useCallback } from 'react';
import { View, LogBox } from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import RootNavigation from './Navigation/RootNavigation';

LogBox.ignoreAllLogs()

export default function Root() {
  const [isLoaded] = useFonts({
    "Inter-Regular": require("./Assets/Fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./Assets/Fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("./Assets/Fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./Assets/Fonts/Inter-SemiBold.ttf"),
    "Roboto-Bold": require("./Assets/Fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./Assets/Fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./Assets/Fonts/Roboto-Regular.ttf"),
    "Roboto-SemiBold": require("./Assets/Fonts/Roboto-Bold.ttf"),


  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }


  return (
    <View style={{ flex: 1 }}>
      <RootNavigation />
    </View>
  );
}
