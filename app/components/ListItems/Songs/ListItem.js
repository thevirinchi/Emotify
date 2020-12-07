import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Margin } from '../../../constants/utility'
import Body from '../../Typo/Body'

import Options from '../../../assets/images/options.svg'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import { Colors } from '../../../constants/colors'


const SongListItem = props => {

	return (
		<View style={styles.container}>
			<View style={styles.detailsContainer}>
				<Image source={{uri: props.icon}} style={styles.icon} />
				<View>
					<Body lvl={1} text={props.title} style={{ marginVertical: 0 }} />
					<Body lvl={2} text={props.authors} style={{ marginVertical: 0 }} />
				</View>
			</View>
			<View>
				<TouchableNativeFeedback>
					<Options />
				</TouchableNativeFeedback>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { marginBottom: Margin.m, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
	detailsContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center" },
	icon: { resizeMode: "contain", width: 40, height: 40, marginRight: Margin.s, borderRadius: 2 }
})

export default SongListItem