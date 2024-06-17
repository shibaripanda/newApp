import { axiosCall } from "../modules/axiosCall"

export const fixServiceSettings = async () => {

    return (await axiosCall('GET', `http://localhost:5000/api/getsettingscamp/${sessionStorage.getItem(`campId ${sessionStorage.getItem('currentUser')}`)}`, {})).data

}

export const updateServiceSettings = async (obj) => {

    await axiosCall('PUT', `http://localhost:5000/api/updatesettingscamp/${sessionStorage.getItem(`campId ${sessionStorage.getItem('currentUser')}`)}`, obj)

}
