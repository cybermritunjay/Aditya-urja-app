import {ServerAddress,Authorization} from './config/config'
const api = async (payload,endpoint) =>{ 
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
    try{
        let response = await fetch(`${ServerAddress}/${endpoint}`,options);
        let json = await response.json()
        console.log(json)
        return json
    }catch(error){
            throw error
    }
}
export default api