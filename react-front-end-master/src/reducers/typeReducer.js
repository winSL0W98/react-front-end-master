import { SET_JOB_TITLE_USER } from '../actions/types';


const initialState = {
    idButtonType: 0,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_JOB_TITLE_USER:
            return{ ...state, idButtonType: action.payload};
        default:
            return state;
    }
}