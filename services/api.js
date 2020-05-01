import { ServerAddress, Authorization } from './config/config'
const api = async (payload, endpoint) => {
    const options = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Authorization': Authorization,
        },
        body: payload != null ? JSON.stringify(payload) : {},
    }
    try {
        let response = await fetch(`${ServerAddress}/${endpoint}`, options);
        let json = await response.json()
        return json
    } catch (err) {
        if (err == 'TypeError: Failed to fetch') {
            return ({
                success: false,
                error: "Unable To Connect to Server Kindly Check Your Internet Or Contact Devlovers"
            })
        } else {
            return ({
                success: false,
                error: "ServerError"
            })
        }
    }
}
export default api