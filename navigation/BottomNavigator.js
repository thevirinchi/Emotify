import React from 'react'

import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'

import Home from '../screens/Main/Home'
import Categories from '../screens/Main/Categories'
import FaceScan from '../screens/Main/FaceScan'
import History from '../screens/Main/History'
import User from '../screens/Main/User'

import { Colors } from '../constants/colors'
import { Ionicons } from '@expo/vector-icons'
import HomeIcon from '../assets/images/home.svg'
import HomeActiveIcon from '../assets/images/homeActive.svg'

const BottomTabNavigator = createBottomTabNavigator({
	HomeScreen: {
		screen: Home,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {
				return <Ionicons name="ios-home" size={24} color={tabInfo.tintColor} />
			},
			tabBarLabel: "Home",
			tabBarColor: Colors.accent
		}
	},
	CategoriesScreen: {
		screen: Categories,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {
				return <Ionicons name="ios-keypad" size={24} color={tabInfo.tintColor} />
			},
			tabBarLabel: "Categories",
			tabBarColor: Colors.accent
		}
	},
	FaceScanScreen: {
		screen: FaceScan,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {
				return <Ionicons name="ios-camera" size={24} color={tabInfo.tintColor} />
			},
			tabBarLabel: "Scan",
			tabBarColor: Colors.accent
		}
	},
	HistoryScreen: {
		screen: History,
		navigationOptions: {
			tabBarIcon: (tabInfo) => {
				return <Ionicons name="ios-list" size={24} color={tabInfo.tintColor} />
			},
			tabBarLabel: "History",
			tabBarColor: Colors.accent
		}
	}
	// },
	// UserScreen: {
	// 	screen: User,
	// 	navigationOptions: {
	// 		tabBarIcon: (tabInfo) => {
	// 			return <Ionicons name="md-person" size={24} color={tabInfo.tintColor} />
	// 		},
	// 		tabBarLabel: "Profile",
	// 		tabBarColor: Colors.accent
	// 	}
	// }
},
{
	tabBarOptions: {
		activeTintColor: Colors.accent,
		labelStyle: {
			fontFamily: 'roboto-regular'
		}
	}
})

export default createAppContainer(BottomTabNavigator)