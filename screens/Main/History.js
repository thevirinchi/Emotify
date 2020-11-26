import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import Heading from '../../components/Typo/Heading'
import SongListItem from '../../components/ListItems/Songs/ListItem'

import { Colors } from '../../constants/colors'
import { Margin, Padding } from '../../constants/utility'

import { HistoryData } from '../../data/History'

const History = props => {

	const renderHistoryItem = (itemData) => {
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

	return (
		<View style={styles.root}>
			<View style={styles.headerContainer}>
				<Heading lvl={1} text="Emotify" />
			</View>
			<FlatList numColumns={1} renderItem={renderHistoryItem} data={HistoryData} keyExtractor={item => item.id} backgroundColor={Colors.white} width={"100%"} />
		</View>
	)
}

const styles = StyleSheet.create({
	root: { paddingHorizontal: Padding.l, paddingVertical: Padding.m },
	headerContainer: { width: "100%", justifyContent: "center", alignItems: "center" },
})

export default History