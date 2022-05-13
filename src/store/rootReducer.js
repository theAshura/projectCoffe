import formReducer from "./reducer/formReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    data: formReducer
})

export default rootReducer