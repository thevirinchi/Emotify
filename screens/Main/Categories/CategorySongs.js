import React from 'react'
import {View, FlatList, StyleSheet} from 'react-native'
import SongListItem from '../../../components/ListItems/Songs/ListItem'

import Display from '../../../components/Typo/Display'

import { Colors } from '../../../constants/colors'
import { Margin, Padding } from '../../../constants/utility'

import { CategoriesData } from '../../../data/categories'
import { SuggestionData } from '../../../data/SuggestionData'

const CategorySongs = props => {

	const id = props.navigation.getParam('id')
	const category = CategoriesData.find(category => category.id === id)
	const songs = SuggestionData

	const renderSongItem = (itemData) => {
		return (
			<SongListItem
				onPressHandler={() => { console.log( itemData.item.id ) }}
				id={itemData.item.id}
				icon={itemData.item.icon}
				title={itemData.item.title}
				authors={itemData.item.authors}
			/>
		)
	}

	return (
		<View style={{flex: 1, backgroundColor: Colors.white}}>
			<View style={{...styles.headerContainer, backgroundColor: category.white, paddingHorizontal: Padding.l, paddingVertical: Padding.m}}>
				<Display text={category.title} style={{color: category.bgColor}}/>
			</View>
			<View style={styles.root}>
				<FlatList numColumns={1} renderItem={renderSongItem} data={songs} keyExtractor={item => item.id} width={"100%"} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	root: { paddingHorizontal: Padding.l, paddingVertical: Padding.m, backgroundColor: Colors.white, flex: 1 },
	headerContainer: { width: "100%", justifyContent: "center", alignItems: "flex-start" },
})

export default CategorySongs