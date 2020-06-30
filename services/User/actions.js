import api from '../api'
import * as actionTypes from '../Auth/actionTypes'
import { store } from '../../common/store'

export const updateProfile = (payload) => {
    //dispatch a action update profile and replace user object with responce updated user.....get updated user from server
    
    return api(payload,'update-details')
}

export const contactus = (payload) =>{
    return api(payload,'contact-us')
}

export const DispatchUpdate = (payload) =>{
    console.log('payload',payload)
    store.dispatch(UpdateAction(payload))
}

const UpdateAction = items => ({
    type: actionTypes.UPDATE,
    items,
});