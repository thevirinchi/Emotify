import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import { Margin, Padding } from '../../../constants/utility'

const CategoryItem = props => {

	const Icon = () => {
		switch (props.icon) {
			case "EmoteAngry":
				return <Image source={require('../../../assets/images/emotes/angry.png')} style={{ width: 50, height: 50, resizeMode: "cover" }} />
			case "EmoteGrinning":
				return <Image source={require('../../../assets/images/emotes/grinning.png')} style={{ width: 50, height: 50, resizeMode: "cover" }} />
			case "EmoteNoExpression":
				return <Image source={require('../../../assets/images/emotes/no-expression.png')} style={{ width: 50, height: 50, resizeMode: "cover" }} />
			case "EmoteSad":
				return <Image source={require('../../../assets/images/emotes/sad.png')} style={{ width: 50, height: 50, resizeMode: "cover" }} />
			case "EmoteStars":
				return <Image source={require('../../../assets/images/emotes/stars.png')} style={{ width: 50, height: 50, resizeMode: "cover" }} />
			default:
				return null
		}
	}

	return (
		<View style={{ backgroundColor: props.backgroundColor, borderRadius: 16, margin: Margin.s, padding: Padding.m, elevation: 4, width: Dimensions.get("screen").width / 5, height: Dimensions.get("screen").width / 5, alignItems: "center", justifyContent: "center" }}>
			<Icon />
		</View>
	)
}

export default CategoryItem