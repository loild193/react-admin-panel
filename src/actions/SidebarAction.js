import { SET_SHIFT } from "../utils/constant"

export const setShiftedLeft = shifedLeft => {
	return {
		type: SET_SHIFT,
		payload: shifedLeft,
	}
}