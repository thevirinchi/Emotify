import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import CategorySongs from '../screens/Main/Categories/CategorySongs'
import Categories from '../screens/Main/Categories'

const CategoriesNavigator = createStackNavigator({
	Categories: Categories,
	CategorySongsScreen: CategorySongs
}, {
	defaultNavigationOptions: {
		headerShown: false
	}
})

export default createAppContainer(CategoriesNavigator)