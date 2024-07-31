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

export const addNewUserToCamp = async (obj) => {
    console.log('addnewusertocamp', obj)
    await axiosCall('PUT', `http://localhost:5000/api/addnewusertocamp/${sessionData('read', 'campId')}`, obj)
}

export const getUsersOfCamp = async () => {
    console.log('getusersofcamp')
    return await axiosCall('GET', `http://localhost:5000/api/getusersofcamp/${sessionData('read', 'campId')}`, {})
}

export const deleteUserFromCamp = async (obj) => {
    console.log('deleteuserfromcamp', obj)
    await axiosCall('PUT', `http://localhost:5000/api/deleteuserfromcamp/${sessionData('read', 'campId')}`, obj)
}

export const editUserRole = async (obj) => {
    console.log('edituserrole', obj)
    await axiosCall('PUT', `http://localhost:5000/api/edituserrole/${sessionData('read', 'campId')}`, obj)
}


