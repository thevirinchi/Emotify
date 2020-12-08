import React from 'react'
import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from "react-native"

import { Colors } from '../../constants/colors'
import { Margin, Padding } from '../../constants/utility'
import Body from '../Typo/Body'

const Spinner = props => {
	return (
		<View style={{...styles.container}}>
			<ActivityIndicator size="large" color={Colors.accent} />
			<Body text={props.text} lvl={1} style={{marginTop:Margin.xl}}/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: Padding.xl,
		borderRadius: 16,
		elevation: 4,
		shadowColor: Colors.black, shadowOpacity: 0.25, shadowOffset: { width: 0, height: 2 }, shadowRadius: 8,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.white
	}
});

export default Spinner