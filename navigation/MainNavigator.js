import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import BottomTabNavigator from './BottomNavigator'
import OnBoardingNavigator from './OnBoardingNavigator'

const MainNavigator = createSwitchNavigator({
	AuthNavigator: OnBoardingNavigator,
	BottomNavigator: BottomTabNavigator
})

export default createAppContainer(MainNavigator)