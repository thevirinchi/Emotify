import React from 'react'
import { View } from 'react-native'
import { Colors } from '../constants/colors'
import CategoryModel from '../models/Category'

export const CategoriesData = [
	new CategoryModel('c1', "EmoteAngry", 'Angry', Colors.emot1, Colors.white),
	new CategoryModel('c2', "EmoteGrinning", 'Happy', Colors.emot5, Colors.black),
	new CategoryModel('c3', "EmoteNoExpression", 'Neutral', Colors.emot2, Colors.white),
	new CategoryModel('c4', "EmoteSad", 'Sad', Colors.emot4, Colors.white),
	new CategoryModel('c5', "EmoteStars", 'Surprise', Colors.emot3, Colors.white)
]