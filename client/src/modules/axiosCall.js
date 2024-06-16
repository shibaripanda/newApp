import axios from "axios";

export const axiosCall = async (typeRequest, link, objectUpdate) => {
    return await axios({
        method: typeRequest,
        url: link,
        data: objectUpdate,
        headers: {'Authorization': 'Bearer ' + sessionStorage.getItem(`token ${sessionStorage.getItem('currentUser')}`)},
        timeout: 10000
    })
}