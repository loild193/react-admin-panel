import { GET_THEME, SET_COLOR, SET_MODE } from "../utils/constant"

export const setMode = mode => {
	return {
		type: SET_MODE,
		payload: mode,
	}
}

export const setColor = color => {
	return {
		type: SET_COLOR,
		payload: color,
	}
}

export const getTheme = mode => {
	return {
		type: GET_THEME,
		payload: mode,
	}
}