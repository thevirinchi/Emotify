import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import Spinner from './Spinner'

const Overlay = props => {

	const loadingState = useSelector(state => state.loading)

	return (
		(
			loadingState.visible
				?
				<View style={{ ...styles.overlay }}>
					<Spinner text={loadingState.text}/>
				</View>
				:
				<View />
		)
	)
}

const styles = StyleSheet.create({
	overlay: { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }
})

export default Overlay