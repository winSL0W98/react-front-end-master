import { SET_JOB_TITLE_USER } from './types';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

export function setJobTitleUser(button) {
    return {
        type: SET_JOB_TITLE_USER,
        button
    };
}

export function login(data) {
    return dispatch => {
        return axios.post('http://localhost:8000/api/auth-token/', data).then(res => {
            const token = res.data.access;
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwtDecode(token)));
        })
    }
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}
