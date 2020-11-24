import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Colors } from '../../constants/colors';
import { FontSize, Padding, Margin } from '../../constants/utility'

const Heading = props => {

	const text = () => {
		switch (props.lvl) {
			case 1:
				return <Text style={{ ...styles.h1, ...props.style }}>{props.text}</Text>
			case 2:
				return <Text style={{ ...styles.h2, ...props.style }}>{props.text}</Text>
			case 3:
				return <Text style={{ ...styles.h3, ...props.style }}>{props.text}</Text>
			default:
				break;
		}
	}

	return (
		<View style={{ ...props.containerStyle }}>
			{ text()}
		</View>
	)
}

const styles = StyleSheet.create({
	h1: { fontFamily: 'roboto-bold', fontSize: FontSize.l, color: Colors.black, marginVertical: Margin.l, textTransform: "capitalize" },
	h2: { fontFamily: 'roboto-medium', fontSize: FontSize.m, color: Colors.black, marginVertical: Margin.l, textTransform: "capitalize" },
	h3: { fontFamily: 'roboto-italic', fontSize: FontSize.m, color: Colors.black, marginVertical: Margin.m, textTransform: "capitalize" }
})

export default Heading