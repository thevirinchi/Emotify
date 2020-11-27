import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, Alert } from 'react-native'
import { FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import Heading from '../../components/Typo/Heading'
import Display from '../../components/Typo/Display'

import SongListItem from '../../components/ListItems/Songs/ListItem'
import { SuggestionData } from '../../data/SuggestionData'

import { Colors } from '../../constants/colors'
import { Margin, Padding } from '../../constants/utility'
import Button from '../../components/Button/Button'

const FaceScan = props => {

	const verifyPermissions = async() => {
		const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL)
		if(result.status !== 'granted'){
			Alert.alert("Insufficient permissions!", "You need to grant camera permissions to use this app.", [{text: 'Okay'}])
			return false
		}
		return true
	}

	const [suggestionCount, toggleSuggestionCount] = useState(5)
	const [scanMode, toggleScanMode] = useState(true)
	const [data, setData] = useState(SuggestionData)

	useEffect(() => {
		setData(SuggestionData.slice(0, suggestionCount))
	}, [suggestionCount])

	useEffect(async()=>{
		if(scanMode){
			const hasPermission = await verifyPermissions()
			if(hasPermission){
				const image = await ImagePicker.launchCameraAsync({
					allowsEditing: true,
					aspect: [1, 1],
					quality: 0.5
				})
				if(image.cancelled === true)
					props.navigation.navigate('HomeScreen')
				else
					console.log(image.uri)
			}
		}
	}, [scanMode])

	const renderSuggestionItem = (itemData) => {
		return (
			<SongListItem
				onPressHandler={() => { console.log({ itemData }) }}
				id={itemData.item.id}
				icon={itemData.item.icon}
				title={itemData.item.title}
				authors={itemData.item.authors}
			/>
		)
	}

	const suggestionCountHandler = () => {
		if (suggestionCount === 5)
			toggleSuggestionCount(10)
		else
			toggleSuggestionCount(5)
	}

	return (
		<ScrollView style={styles.root}>
			<View style={styles.headerContainer}>
				<Heading lvl={1} text="Emotify" />
				<Display text="Let's keep that smile wide!" containerStyle={{ width: "100%" }} />
				<Image source={require('../../assets/images/emotes/grinning.png')} style={{ marginVertical: Margin.xl }} />
				<Heading lvl={3} text="Suggestions" containerStyle={{ width: "100%", marginBottom: Margin.m }} />
				<FlatList numColumns={1} renderItem={renderSuggestionItem} data={data} keyExtractor={item => item.id} width={"100%"} />
				<TouchableNativeFeedback onPress={suggestionCountHandler} style={{ marginBottom: Margin.l }}>
					<Button lvl={2} text={suggestionCount === 5 ? "Show More" : "Show Less"} style={{ backgroundColor: Colors.emot7, paddingVertical: Padding.s }} containerStyle={{ marginTop: Margin.m }} />
				</TouchableNativeFeedback>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	root: { paddingHorizontal: Padding.l, paddingVertical: Padding.m, backgroundColor: Colors.emot7, flex: 1 },
	headerContainer: { width: "100%", justifyContent: "center", alignItems: "center" },
})

export default FaceScan