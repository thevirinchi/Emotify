import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

import Heading from '../../components/Typo/Heading'
import Body from '../../components/Typo/Body'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '../../constants/colors'
import { Margin, Padding } from '../../constants/utility'
import Button from '../../components/Button/Button'

import PageIndicatorActive from '../../assets/images/pageIndicatorActive.svg'
import PageIndicatorInactive from '../../assets/images/pageIndicatorInactive.svg'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'

const OnBoarding1 = props => {
	return (
		<View style={styles.root}>
			<StatusBar hidden/>
			<View style={styles.imageContainer}>
				<Image source={require('../../assets/images/onBoarding1.png')} style={styles.image}/>
			</View>
			<View style={styles.subContainer}>
				<Heading lvl={1} text="Songs" style={styles.marginVertical0}/>
				<Body lvl={1} text="Songs for each of your emotion" style={styles.marginVertical0}/>
				<View style={styles.subSubContainer}>
					<View><PageIndicatorActive/></View>
					<View style={styles.marginVerticalM}><PageIndicatorInactive/></View>
					<View><PageIndicatorInactive/></View>
				</View>
				<TouchableNativeFeedback style={{width: "100%"}} onPress={()=>{props.navigation.navigate('onBoardingScreen2')}}>
					<Button lvl={1} text="Next"/>
				</TouchableNativeFeedback>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {height: "100%", width: "100%", backgroundColor: Colors.white, justifyContent: "flex-end", alignItems: "center", padding: Padding.l},
	imageContainer: {width: "100%", flex: 1, justifyContent: "center", alignItems: "center"},
	image: {resizeMode: "contain", width: "90%", height: Dimensions.get("screen").height/2, marginTop: Margin.l},
	subContainer: {width: "100%", justifyContent: "center", alignItems: "center", paddingBottom: Padding.xl},
	marginVertical0: {marginBottom: 0},
	subSubContainer: {justifyContent: "center", alignItems: "center", flexDirection: "row", paddingVertical: Padding.xl, marginVertical: Margin.s},
	marginVerticalM: {marginHorizontal: Margin.m}
})

OnBoarding1.navigationOptions = navData => {
	return {
		headerShown: false
	}
}

export default OnBoarding1