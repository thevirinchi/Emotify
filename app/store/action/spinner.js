export const TOGGLE_LOADING = "TOGGLE_LOADING"
export const UPDATE_LOADING_TEXT = "UPDATE_LOADING_TEXT"

export const toggleLoading = (loading, loader = 'default', text = "Loading...") => {
	return {
		type: TOGGLE_LOADING,
		visible: loading,
		loader: loader,
		text: text
	}
}

export const updateLoadingText = (text) => {
	return {
		type: UPDATE_LOADING_TEXT,
		text: text
	}
}