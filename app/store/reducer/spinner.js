import { TOGGLE_LOADING, UPDATE_LOADING_TEXT } from '../action/spinner'

const initalState = {
	visible: false,
	loader: 'default',
	text: 'Loading...'
}
export default (state = initalState, action) => {
	switch (action.type) {
		case TOGGLE_LOADING:
			return {
				...state,
				visible: action.visible,
				loader: action.loader,
				text: action.text
			}
		case UPDATE_LOADING_TEXT:
			return{
				...state,
				text: action.text
			}
		default:
			break;
	}
	return state
}