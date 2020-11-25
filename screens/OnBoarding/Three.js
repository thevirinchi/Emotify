import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

import Heading from '../../components/Typo/Heading'
import Body from '../../components/Typo/Body'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '../../constants/colors'
import { Margin, Padding } from '../../constants/utility'
import Social from '../../components/Button/Social'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'

const OnBoarding3 = props => {
	return (
		<View style={styles.root}>
			<StatusBar hidden/>
			<View style={styles.fullWidth}>
				<Heading lvl={1} text="Let's get you" style={{marginBottom: 0}}/>
				<Heading lvl={1} text="started!" style={{marginTop: 0}}/>
			</View>
			<Image source={require('../../assets/images/logoCube.png')} style={styles.image}/>
			<View style={styles.fullWidth}>
				<Heading lvl={2} text="Sign in with," style={{marginBottom: Margin.xl}}/>
				<View style={styles.socialButtonsContainer}>
					<TouchableNativeFeedback style={styles.socialButtonContainer}>
						<Social type={"GOOGLE"} text="Google" style={styles.socialButton}/>
					</TouchableNativeFeedback>
					<Body lvl={1} text="OR" style={{marginVertical: Margin.s, width: "100%"}}/>
					<TouchableNativeFeedback style={styles.socialButtonContainer}>
						<Social type={"FACEBOOK"} text="Facebook" style={styles.socialButton}/>
					</TouchableNativeFeedback>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {height: "100%", width: "100%", backgroundColor: Colors.white, justifyContent: "center", alignItems: "center", padding: Padding.l},
	fullWidth: {width: "100%"},
	image: {height: Dimensions.get("screen").height/3, resizeMode: "contain", marginVertical: Margin.xl},
	socialButtonsContainer: {width: "100%", justifyContent: "center", alignItems: "center"},
	socialButtonContainer: {padding: Padding.s},
	socialButton: {width: Dimensions.get("screen").width/1.5},
})

OnBoarding3.navigationOptions = navData => {
	return {
		headerShown: false
	}
}

export default OnBoarding3