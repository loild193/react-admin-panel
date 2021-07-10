import { SET_SHIFT } from "../utils/constant"

const initState = {
	shiftedLeft: false,
}

const SidebarReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_SHIFT:
			return {
				...state,
				shiftedLeft: action.payload,
			}

			default: return state
	}
}

export default SidebarReducer