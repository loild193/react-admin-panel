import { combineReducers } from "redux";
import ThemeReducer from "./ThemeReducer";
import SidebarReducer from "./SidebarReducer";

const rootReducer = combineReducers({ 
	ThemeReducer,
	SidebarReducer,
});

export default rootReducer