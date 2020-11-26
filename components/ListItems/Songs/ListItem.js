import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Margin } from '../../../constants/utility'
import Body from '../../Typo/Body'

import Options from '../../../assets/images/options.svg'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import { Colors } from '../../../constants/colors'


const SongListItem = props => {

	const Icon = () => {
		switch (props.icon) {
			case '1':
				return <Image source={require('../../../assets/images/ab67616d00004851ff8c985ecb3b7c5f847be357.png')} style={styles.icon} />
			case '2':
				return <Image source={require('../../../assets/images/ab67616d000048519ca0c952f130e28025209cf0.png')} style={styles.icon} />
			case '3':
				return <Image source={require('../../../assets/images/ab67616d0000485187d15f78ec75621d40028baf.png')} style={styles.icon} />
			case '4':
				return <Image source={require('../../../assets/images/ab67616d00004851755995e9ff2b1b0c753f5eb8.png')} style={styles.icon} />
			case '5':
				return <Image source={require('../../../assets/images/ab67616d000048518863bc11d2aa12b54f5aeb36.png')} style={styles.icon} />
			default:
				return null
		}
	}

	return (
		<View style={styles.container}>
			<View style={styles.detailsContainer}>
				<Icon />
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
	container: { marginBottom: Margin.m, flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: Colors.white },
	detailsContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center" },
	icon: { resizeMode: "contain", width: 40, height: 40, marginRight: Margin.s, borderRadius: 2 }
})

export default SongListItem