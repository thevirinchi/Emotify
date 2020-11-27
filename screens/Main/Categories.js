import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import Heading from '../../components/Typo/Heading'
import CategoryItem from '../../components/ListItems/Category/Category'
import { CategoriesData } from '../../data/categories'

import { Colors } from '../../constants/colors'
import { Margin, Padding } from '../../constants/utility'

const Categories = props => {

	const renderCategoryItem = (itemData) => {
		return (
			<CategoryItem
				onPressHandler={() => { props.navigation.navigate('CategorySongsScreen', {id: itemData.item.id})  }}
				id={itemData.item.id}
				icon={itemData.item.icon}
				backgroundColor={itemData.item.bgColor}
				color={itemData.item.fgColor}
				title={itemData.item.title}
				size="big"
			/>
		)
	}

	return (
		<View style={styles.root}>
			<View style={styles.headerContainer}>
				<Heading lvl={1} text="Emotify" />
			</View>
			<FlatList numColumns={2} renderItem={renderCategoryItem} data={CategoriesData} keyExtractor={item => item.id} backgroundColor={Colors.white} width={"100%"} />
		</View>
	)
}

const styles = StyleSheet.create({
	root: { paddingHorizontal: Padding.l, paddingVertical: Padding.m, backgroundColor: Colors.white, flex: 1 },
	headerContainer: { width: "100%", justifyContent: "center", alignItems: "center" },
})

export default Categories