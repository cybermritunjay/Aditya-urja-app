import api from '../api'

export const getAllComplaints = (payload) => {
    return api(payload,'all-complaints');
}

export const createNewComplaint = (payload) => {
    return api(payload,'create-complaint');
}

export const fetchBrands = ()=>{
    return api({},'get-brands');
}
export const fetchModels = (payload) =>{
    return api(payload,'get-models');
}

export const getSingleComplaint = (payload) =>{
    return api(payload,'single-complaint');
}