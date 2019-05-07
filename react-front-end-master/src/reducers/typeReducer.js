import { SET_JOB_TITLE_USER } from '../actions/types';


const initialState = {
    idButtonType: 0
};


export const reducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case SET_JOB_TITLE_USER:
            return{ ...state, idButtonType: payload};
        default:
            return state;
    }
};