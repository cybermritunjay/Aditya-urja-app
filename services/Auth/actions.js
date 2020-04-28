import * as actionTypes from './actionTypes'
import {store} from '../../common/store'
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

export const login = () => {
    const data={
        token:'Dummy irghpoeriht0y3q489yjf=0w[fjp]pfnja;',
        user: {
            id:"345646treg4w5",
            email:'cybermritunjay@gmail.com'
        }
    }
    store.dispatch(LoginAction(data))
    return 'Success'
}