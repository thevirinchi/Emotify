import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import auth from '@react-native-firebase/auth';

import Heading from '../../components/Typo/Heading'
import Body from '../../components/Typo/Body'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '../../constants/colors'
import { Margin, Padding } from '../../constants/utility'
import Social from '../../components/Button/Social'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import Button from '../../components/Button/Button'
import { TextInput } from 'react-native-paper'
import Input from '../../components/Input/Input'
import { FIREBASE_API_KEY } from '../../config/defaultConfig'

import "firebase/firestore";
import firebase from "firebase";

const OnBoarding3 = props => {

	const [email, setEmail] = useState('')
	const [validEmail, toggleValidEmail] = useState(false)
	const [password, setPassword] = useState('')
	const [validPassword, toggleValidPassword] = useState(false)

	const onInputChange = (id, value, isValid) => {
		switch (id) {
			case 'email':
				toggleValidEmail(isValid)
				if(isValid)
					setEmail(value)
				break;
			case 'password':
				toggleValidPassword(isValid)
				if(isValid)
					setPassword(value)
				break;
			default:
				break;
		}
	}

	const onLoginSuccess = () => {
		console.log("Done")
		//this.props.navigation.navigate('App');
	} 
	const onLoginFailure = (errorMessage) => {
		console.log({errorMessage})
		//this.setState({ error: errorMessage, loading: false });
	}

	const loginHandler = async() => {
		if(validEmail && validPassword){
			await firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(onLoginSuccess.bind(this))
				.catch(error => {
					let errorCode = error.code;
					let errorMessage = error.message;
					if (errorCode == 'auth/weak-password') {
						onLoginFailure.bind(this)('Weak Password!');
					} else {
						onLoginFailure.bind(this)(errorMessage);
					}
				});
		}
	}

	const signInHandler = async() => {
		if(validPassword && validEmail){
			await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then(onLoginSuccess.bind(this))
				.catch(error => {
					let errorCode = error.code;
					let errorMessage = error.message;
					if (errorCode == 'auth/weak-password') {
						onLoginFailure.bind(this)('Weak Password!');
					} else {
						onLoginFailure.bind(this)(errorMessage);
					}
				});
		}
	}

	return (
		<View style={styles.root}>
			<StatusBar hidden />
			<View style={styles.fullWidth}>
				<Heading lvl={1} text="Let's get you" style={{ marginBottom: 0 }} />
				<Heading lvl={1} text="started!" style={{ marginTop: 0 }} />
			</View>
			<Image source={require('../../assets/images/logoCube.png')} style={styles.image} />
			<View style={styles.fullWidth}>
				<Heading lvl={2} text="Sign in with," style={{ marginBottom: Margin.xl }} />
				<View>
					<Input id="email" label="E-Mail" keyboardType='email-address' required email autoCapitalize="none" errorText="Please eneter a valid address" onInputChange={onInputChange} initialValue={email} />
					<Input id="password" label="Password" keyboardType='default' secureTextEntry required minLength={5} autoCapitalize="none" errorText="Please eneter a valid password" onInputChange={onInputChange} initialValue={password} />
				</View>
				<View style={styles.socialButtonsContainer}>
					<TouchableNativeFeedback style={styles.socialButtonContainer} onPress={loginHandler}>
						<Button lvl={1} text="Log in" />
					</TouchableNativeFeedback>
					<Body lvl={1} text="OR" style={{ marginVertical: Margin.s, width: "100%" }} />
					<TouchableNativeFeedback style={styles.socialButtonContainer} onPress={signInHandler}>
						<Button lvl={2} text="Sign In" />
					</TouchableNativeFeedback>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	root: { height: "100%", width: "100%", backgroundColor: Colors.white, justifyContent: "center", alignItems: "center", padding: Padding.l },
	fullWidth: { width: "100%" },
	image: { height: Dimensions.get("screen").height / 4, resizeMode: "contain", marginVertical: Margin.xl },
	socialButtonsContainer: { width: "100%", justifyContent: "center", alignItems: "center", marginTop: Margin.l },
	socialButtonContainer: { padding: Padding.s },
	socialButton: { width: Dimensions.get("screen").width / 1.5 },
})

OnBoarding3.navigationOptions = navData => {
	return {
		headerShown: false
	}
}

export default OnBoarding3