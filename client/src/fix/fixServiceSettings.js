import { axiosCall } from "../modules/axiosCall"
import { sessionData } from "../modules/sessionData"

export const fixServiceSettings = async () => {

    return (await axiosCall('GET', `http://localhost:5000/api/getsettingscamp/${sessionData('read', 'campId')}`, {})).data

}

export const updateServiceSettings = async (obj) => {

    await axiosCall('PUT', `http://localhost:5000/api/updatesettingscamp/${sessionData('read', 'campId')}`, obj)

}
