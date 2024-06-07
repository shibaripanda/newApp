import axios from "axios";

export const axiosCall = async (typeRequest, link, objectUpdate) => {
    return axios({
        method: typeRequest,
        url: link,
        data: objectUpdate,
        headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')},
        timeout: 10000
    })
}