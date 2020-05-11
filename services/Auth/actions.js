import * as actionTypes from './actionTypes'
import { store } from '../../common/store';
import api from '../api';
const LoginAction = items => ({
    type: actionTypes.LOGIN,
    items,
});

const LogoutAction = () => ({
    type: actionTypes.LOGOUT,
});

export const logout = () => {
    store.dispatch(LogoutAction())
    return 'Success'
}

export const login = async (payload) => {
    let res = await api(payload, 'login')
    if (res.success) {
        //if user not active redirect to activatioin field with userid and mobile after that set is active true 
        //console.log(res)
        store.dispatch(LoginAction(res))
        return res
    } else {
        return res
    }
}


export const register = (payload) =>{
    return api(payload,'register')
}

export const forgetPassword = (payload) =>{
    return api(payload,'forget-password')
}

export const verifyUser = (payload)=>{
    return api(payload,'verify-user')
}
export const fpVerify = (payload)=>{
    return api(payload,'verify-otp')
}
export const resetPassword = (payload)=>{
    return api(payload,'recover-password')
}

