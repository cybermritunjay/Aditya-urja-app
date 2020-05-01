import api from '../api'
export const getAllHelp = () => {
    return api({},'all-help');
}

export const getSingleHelp = (payload) => {
    return api(payload,'single-help');
}


export const passIsHelpful = (payload) =>{
    return api(payload,'set-helpfull')
}

