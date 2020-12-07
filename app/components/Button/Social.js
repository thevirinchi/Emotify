import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import Body from '../Typo/Body'

import { Colors } from '../../constants/colors'

const Button = props => {

	const button = () => {
		switch (props.type) {
			case "GOOGLE":
				return <View style={{ ...styles.buttonPrimary, ...props.style }}>{props.iconLeft}<Body lvl={3} text={props.text} style={{ color: Colors.accent }} />{props.iconRight}</View>
			case "FACEBOOK":
				return <View style={{ ...styles.buttonSecondary, ...props.style }}>{props.iconLeft}<Body lvl={3} text={props.text} style={{ color: Colors.accent2 }} />{props.iconRight}</View>
			default:
				break;
		}
	}

	return (
		<View style={{ ...props.containerStyle }}>{button()}</View>
	)
}

const styles = StyleSheet.create({
	buttonPrimary: { backgroundColor: Colors.white, borderColor: Colors.accent, borderRadius: 8, borderWidth: 1.5, minWidth: "40%", flexDirection: "row", justifyContent: "center", alignItems: "center", elevation: 1, shadowColor: Colors.accent, shadowOpacity: 0.25, shadowOffset: { width: 0, height: 2 }, shadowRadius: 8 },
	buttonSecondary: { backgroundColor: Colors.white, borderColor: Colors.accent2, borderRadius: 8, borderWidth: 1.5, flexDirection: "row", minWidth: "40%", justifyContent: "center", alignItems: "center", elevation: 1, shadowColor: Colors.accent2, shadowOpacity: 0.25, shadowOffset: { width: 0, height: 2 }, shadowRadius: 8 },
})

export default Button