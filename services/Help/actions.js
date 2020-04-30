import api from '../api'
export const getAllHelp = () => {
    return api({},'all-help');
}