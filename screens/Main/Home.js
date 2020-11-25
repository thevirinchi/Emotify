import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import Heading from '../../components/Typo/Heading'

import {Colors} from '../../constants/colors'

const Home = props => {
	return (
		<View>
			<View style={{width: "100%", justifyContent: "center", alignItems: "center"}}>
				<Heading lvl={1} text="Emotify"/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({

})

Home.navigationOptions = navData => {
	return {
		headerShown: true,
		headerTitle: 'Emotify',
		headerStyle: {
			backgroundColor: Colors.white
		},
		headerTintColor: Colors.black,
		headerLeft: ()=> <HeaderButtons HeaderButtonComponent={RightButton}><Item title="Menu" iconName='ios-menu' onPress={()=>{navData.navigation.toggleDrawer()}}/></HeaderButtons>
	}
}

export default Home