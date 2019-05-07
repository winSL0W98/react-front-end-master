import { combineReducers } from "redux";

import authReducer from "./authReducer";
import typeReducer from "./typeReducer";


const rootReducer = combineReducers({
    typeReducer,
    authReducer
});

export default rootReducer;
