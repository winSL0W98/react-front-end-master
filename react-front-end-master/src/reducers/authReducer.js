import { SET_CURRENT_USER } from "../actions/types";
import isEmpty from "lodash/isEmpty";

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function auth(state = initialState, action = {}) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                user: action.user,
                isAuthenticated: !isEmpty(action.user)
            };
        default:
            return state;
    }
}
