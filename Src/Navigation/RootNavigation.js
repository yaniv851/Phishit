import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';

import Splash from "../Screens/Splash";
import Onboarding from "../Screens/Onboarding";
import SignUp from "../Screens/SignUp";
import Home from "../Screens/Home";
import Scanning from "../Screens/Scanning";
import PhishingAlert from "../Screens/PhishingAlert";

enableScreens(true);

const Stack = createStackNavigator();
const navigationRef = React.createRef();

const options = {
	headerBackTitleVisible: false,
	cardStyleInterpolator: ({ current: { progress } }) => {
		return {
			cardStyle: {
				opacity: progress,

			}
		};
	},

};

export function navigate(name, params) {
	navigationRef.current?.navigate(name, params);
}

export default function RootNavigator() {
	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator initialRouteName='Splash'
				screenOptions={{
					headerShown: false
				}}>
				<Stack.Screen name='Splash' component={Splash} />
				<Stack.Screen name='Onboarding' component={Onboarding} />
				<Stack.Screen name='SignUp' component={SignUp} />
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Scanning' component={Scanning} />
				<Stack.Screen name='PhishingAlert' component={PhishingAlert} />



				{/*  */}
				{/*  */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

