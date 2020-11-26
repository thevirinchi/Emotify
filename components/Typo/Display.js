import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Colors } from '../../constants/colors';
import { FontSize, Padding, Margin } from '../../constants/utility'

const Display = props => {

	return (
		<View style={{ ...props.containerStyle }}>
			<Text style={{ ...styles.display, ...props.style }}>{props.text}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	display: { fontFamily: 'roboto-bold', fontSize: FontSize.xl, color: Colors.black, marginVertical: Margin.l, textTransform: "capitalize" }
})

export default Display