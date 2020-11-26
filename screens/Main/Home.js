import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'
import { FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler'

import CategoryItem from '../../components/ListItems/Category/Category'
import MostPlayedItem from '../../components/ListItems/Songs/MostPlayed'
import Heading from '../../components/Typo/Heading'
import Body from '../../components/Typo/Body'

import { Categories } from '../../data/categories'
import { MostPlayed } from '../../data/MostPlayed'

import { Colors } from '../../constants/colors'
import { Margin, Padding } from '../../constants/utility'

const Home = props => {

	const renderCategoryItem = (itemData) => {
		return (
			<CategoryItem
				onPressHandler={() => { console.log({ itemData }) }}
				id={itemData.item.id}
				icon={itemData.item.icon}
				backgroundColor={itemData.item.bgColor}
				color={itemData.item.fgColor}
				title={itemData.item.title}
			/>
		)
	}

	const renderMostPlayedItem = (itemData) => {
		return (
			<MostPlayedItem
				onPressHandler={() => { console.log({ itemData }) }}
				id={itemData.item.id}
				icon={itemData.item.icon}
				title={itemData.item.title}
				authors={itemData.item.authors}
			/>
		)
	}

	return (
		<ScrollView style={styles.root}>
			<View style={styles.headerContainer}>
				<Heading lvl={1} text="Emotify" />
			</View>
			<View>
				<View style={styles.partHeaderContainer}>
					<Heading lvl={3} text="Moods" style={{ marginVertical: 0 }} />
					<Body lvl={2} text="View All" style={{ marginVertical: 0 }} />
				</View>
				<FlatList numColumns={4} renderItem={renderCategoryItem} data={Categories} keyExtractor={item => item.id} backgroundColor={Colors.white} width={"100%"} />
			</View>
			<View style={{ marginVertical: Margin.xl }}>
				<View style={styles.partHeaderContainer}>
					<Heading lvl={3} text="Start Listening" />
				</View>
				<View>
					<TouchableNativeFeedback onPress={() => { props.navigation.navigate('FaceScanScreen') }} style={styles.bannerContainer}>
						<Image source={require('../../assets/images/faceScanBanner.png.png')} style={styles.banner} />
					</TouchableNativeFeedback>
				</View>
			</View>
			<View style={{ marginBottom: Margin.xl }}>
				<View style={styles.partHeaderContainer}>
					<Heading lvl={3} text="Most Played" />
				</View>
				<FlatList numColumns={1} renderItem={renderMostPlayedItem} data={MostPlayed} keyExtractor={item => item.id} backgroundColor={Colors.white} width={"100%"} />
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	root: { paddingHorizontal: Padding.l, paddingVertical: Padding.m },
	headerContainer: { width: "100%", justifyContent: "center", alignItems: "center" },
	partHeaderContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
	bannerContainer: { width: "100%", height: 200 },
	banner: { resizeMode: "contain", width: "100%", flex: 1 }
})

Home.navigationOptions = navData => {
	return {
		headerShown: true,
		headerTitle: 'Emotify',
		headerStyle: {
			backgroundColor: Colors.white
		},
		headerTintColor: Colors.black,
		headerLeft: () => <HeaderButtons HeaderButtonComponent={RightButton}><Item title="Menu" iconName='ios-menu' onPress={() => { navData.navigation.toggleDrawer() }} /></HeaderButtons>
	}
}

export default Home