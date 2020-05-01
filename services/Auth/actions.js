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
        store.dispatch(LoginAction(res))
        return res
    } else {
        return res
    }


}