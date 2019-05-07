import { SET_JOB_TITLE_USER } from './types';


export const changeType = (idButtonType) => {
    console.log(idButtonType);
    return {
        type: SET_JOB_TITLE_USER,
        payload: idButtonType,
    }
};
