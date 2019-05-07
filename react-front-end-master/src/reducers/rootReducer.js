import { combineReducers } from "redux";

import authReducer from "./authReducer";
import {reducer} from "./typeReducer";


const rootReducer = combineReducers({
    reducer,
    authReducer
});

export default rootReducer;
