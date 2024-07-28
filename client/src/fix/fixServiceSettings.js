import { axiosCall } from "../modules/axiosCall"
import { sessionData } from "../modules/sessionData"

export const fixServiceSettings = async () => {

    return (await axiosCall('GET', `http://localhost:5000/api/getsettingscamp/${sessionData('read', 'campId')}`, {})).data

}

export const updateUserSettings = async (obj) => {
    console.log('updateUserSettings', obj)
    await axiosCall('PUT', `http://localhost:5000/api/updateusersettings/${sessionData('read', 'campId')}`, obj)

}

export const updateDocumentSettings = async (obj) => {
    console.log('updateDocumentSettings', obj)
    await axiosCall('PUT', `http://localhost:5000/api/updatedocumentsettings/${sessionData('read', 'campId')}`, obj)

}

export const updateGeneralSettings = async (obj) => {
    console.log('updateGeneralSettings', obj)
    await axiosCall('PUT', `http://localhost:5000/api/updategeneralsettings/${sessionData('read', 'campId')}`, obj)

}
