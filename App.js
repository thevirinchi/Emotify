import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import OnBoardingNavigator from './navigation/OnBoardingNavigator'
import BottomNavigator from './navigation/BottomNavigator'

let fonts = {
	'roboto-black' : require('./assets/fonts/Roboto-Black.ttf'),
	'roboto-bold' : require('./assets/fonts/Roboto-Bold.ttf'),
	'roboto-italic' : require('./assets/fonts/Roboto-Italic.ttf'),
	'roboto-light' : require('./assets/fonts/Roboto-Light.ttf'),
	'roboto-medium' : require('./assets/fonts/Roboto-Medium.ttf'),
	'roboto-regular' : require('./assets/fonts/Roboto-Regular.ttf'),
	'roboto-thin' : require('./assets/fonts/Roboto-Thin.ttf'),
}

export default function App() {

	const [dataLoaded, toggleDataLoaded] = useState(false)
	const [UserLoggedIn, ToggleUserLoggedIn] = useState(false)

	const loadFonts = async() => {
		await Font.loadAsync(fonts)
		toggleDataLoaded(true)
	}

	useEffect(()=>{
		loadFonts()
	}, [])

	return (
		(dataLoaded
			?
			(UserLoggedIn? <OnBoardingNavigator/> : <BottomNavigator/>)
			:
			<AppLoading/>)
	);
}