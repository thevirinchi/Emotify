import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, Alert } from 'react-native'
import { FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import Heading from '../../components/Typo/Heading'
import Display from '../../components/Typo/Display'

import SongListItem from '../../components/ListItems/Songs/ListItem'
import { SuggestionData } from '../../data/SuggestionData'

import { Colors } from '../../constants/colors'
import { Margin, Padding } from '../../constants/utility'
import Button from '../../components/Button/Button'

import { CategoriesData } from '../../data/categories'
import { SongsData } from '../../data/Songs'

import * as loadingActions from '../../store/action/spinner'

const FaceScan = props => {

	const dispatch = useDispatch()

	const [catId, setCatId] = useState('c2')
	const category = CategoriesData.find(category => category.id === catId)
	const songSuggestions = SongsData.filter(song => song.catId === catId)

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
	const [data, setData] = useState(songSuggestions)

	useEffect(() => {
		setData(songSuggestions.slice(0, suggestionCount))
	}, [suggestionCount])

	useEffect(() => {
		console.log({catId})
	}, [catId])

	const getScan = async()=>{
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
				else{
					dispatch(loadingActions.toggleLoading(true, 'default', "Uploading Image..."))
					setTimeout(function () {
						dispatch(loadingActions.toggleLoading(true, 'default', "Running Facial Expression Recognition..."))
					}, 3000)
					var data = new FormData()
					data.append('image',{
						uri: image.uri,
						name: "test",
						type: 'image/jpg'
					})
					axios({
						url: 'https://e7ed788f7728.ngrok.io/emotion',
						method: 'post',
						data: data,
					}).then(res => {
						toggleScanMode(false)
						dispatch(loadingActions.toggleLoading(false))
						console.log(res.data)
						if(res.data.error === true)
							Alert.alert("Uh Oh!", "There was an error. [ " + res.data.message + " ]", [{text: "Okay", style: 'default'}])
						else
							setCatId(res.data.emotion)
					}).catch(err => {
						toggleScanMode(false)
						dispatch(loadingActions.toggleLoading(false))
						Alert.alert("Uh Oh!", "There was an error. [ " + err.message + " ]", [{text: "Okay", style: 'default'}])
						console.log({err})
					})
				}
			}
		}
	}

	useEffect(()=>{
		getScan()
		return()=>{
			console.log("Scanned")
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

	const getEmot = () => {
		if(catId == 'c1')
			return <Image source={require('../../assets/images/emotes/angry.png')} style={{ marginVertical: Margin.xl }} />
		else if (catId == 'c2')
			return <Image source={require('../../assets/images/emotes/grinning.png')} style={{ marginVertical: Margin.xl }} />
		else if (catId == 'c3')
			return <Image source={require('../../assets/images/emotes/no-expression.png')} style={{ marginVertical: Margin.xl }} />
		else if (catId == 'c4')
			return <Image source={require('../../assets/images/emotes/sad.png')} style={{ marginVertical: Margin.xl }} />
		else
			return <Image source={require('../../assets/images/emotes/stars.png')} style={{ marginVertical: Margin.xl }} />
	}

	return (
		<ScrollView style={{...styles.root, backgroundColor: category.bgColor}}>
			<View style={styles.headerContainer}>
				<Heading lvl={1} text="Emotify" style={{color: category.fgColor}}/>
				<Display text="Let's keep Listening!" containerStyle={{ width: "100%" }}  style={{color: category.fgColor}}/>
				{/* <Image source={require('../../assets/images/emotes/grinning.png')} style={{ marginVertical: Margin.xl }} /> */}
				{getEmot()}
				<Heading lvl={3} text="Suggestions" containerStyle={{ width: "100%", marginBottom: Margin.m }}  style={{color: category.fgColor}}/>
				<FlatList numColumns={1} renderItem={renderSuggestionItem} data={data} keyExtractor={item => item.id} width={"100%"} />
				<TouchableNativeFeedback onPress={suggestionCountHandler} style={{ marginBottom: Margin.l }}>
					<Button lvl={2} text={suggestionCount === 5 ? "Show More" : "Show Less"} style={{ backgroundColor: category.bgColor, paddingVertical: Padding.s }} containerStyle={{ marginTop: Margin.m }} />
				</TouchableNativeFeedback>
				<TouchableNativeFeedback onPress={()=>{toggleScanMode(true)}} style={{ marginBottom: Margin.l }}>
					<Button lvl={2} text="Scan Again" style={{ backgroundColor: category.bgColor, paddingVertical: Padding.s }} containerStyle={{ marginTop: Margin.m }} />
				</TouchableNativeFeedback>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	root: { paddingHorizontal: Padding.l, paddingVertical: Padding.m, flex: 1 },
	headerContainer: { width: "100%", justifyContent: "center", alignItems: "center" },
})

export default FaceScan