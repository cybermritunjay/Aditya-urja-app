import {ServerAddress,Authorization} from './config/config'
export const api = (payload,endpoint) =>{ 
    const options = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': Authorization,
        },
        body: payload != null ? JSON.stringify(payload):{},
    }
    return (
        fetch(`${serverAddress}/${endpoint}`,options)
        .then((response) => response.json())
        .then((data) =>{
            return data
        }).catch((error) =>{
            throw error
    }))
}