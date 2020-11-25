import React from 'react'

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import OnBoarding1 from '../screens/OnBoarding/One'
import OnBoarding2 from '../screens/OnBoarding/Two'

const OnBoardingNavigator = createStackNavigator({
	onBoardingScreen1: OnBoarding1,
	onBoardingScreen2: OnBoarding2
})

export default createAppContainer(OnBoardingNavigator)
