import { combineReducers } from "@reduxjs/toolkit";
import reducer from "../reducer/reducer";

const rootReducer = combineReducers({
    reducer:reducer
})
export default rootReducer;