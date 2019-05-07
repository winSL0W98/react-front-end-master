import { SET_JOB_TITLE_USER } from "../actions/types";

const initialState = {
    id: 0
};

export default function auth(state = initialState, action = {}) {
    switch (action.type) {
        case SET_JOB_TITLE_USER:
            return {
                id: action.id,
            };
        default:
            return state;
    }
}
