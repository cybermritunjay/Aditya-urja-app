import api from '../api'
export const updateProfile = (payload) => {
    //dispatch a action update profile and replace user object with responce updated user.....get updated user from server
    return api(payload,'update-details')
}