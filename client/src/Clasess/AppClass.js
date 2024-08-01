import { getLink } from "../fix/getLink.js"
import { axiosCall } from "../modules/axiosCall"
import { sessionData } from "../modules/sessionData"
import { OrderClass } from "./OrderClass.js"

export class AppClass {

    constructor(){
        this.time = 50000
        this.link = getLink()
        this.campId = sessionData('read', 'campId')
    }

    async updateGeneralSettings(obj){
        await axiosCall('PUT', `${this.link}/api/updategeneralsettings/${this.campId}`, obj)
    }
    async updateDocumentSettings(obj){
        await axiosCall('PUT', `${this.link}/api/updatedocumentsettings/${this.campId}`, obj)
    }
    async updateUserSettings(obj){
        await axiosCall('PUT', `${this.link}/api/updateusersettings/${this.campId}`, obj)
    }
    async updateUserName(obj){
        await axiosCall('PUT', `${this.link}/api/users`, obj)
    }
    async getUser(){
        const res = (await axiosCall('GET', `${this.link}/api/users`, {})).data
        if(typeof res['name'] === 'undefined'){
            res['name'] = 'empty'
        }
        return res
    }
    async editUserRole(obj){
        await axiosCall('PUT', `${this.link}/api/edituserrole/${this.campId}`, obj)
    }
    async deleteUserFromCamp(obj){
        await axiosCall('PUT', `${this.link}/api/deleteuserfromcamp/${this.campId}`, obj)
    }
    async addNewUserToCamp(obj){
        await axiosCall('PUT', `${this.link}/api/addnewusertocamp/${this.campId}`, obj)
    }
    async getUsersOfCamp(){
        return (await axiosCall('GET', `${this.link}/api/getusersofcamp/${this.campId}`, {})).data
    }
    async getRole(){
        return sessionData('read', 'role')
    }
    async getCurrentUser(){
        return sessionData('read', 'currentUser')
    }
    async getCampId(){
        return sessionData('read', 'campId')
    }
    async fixServiceSettings(){
        return (await axiosCall('GET', `${this.link}/api/getsettingscamp/${this.campId}`, {})).data
    }
    async greateOrder(obj){
        return await axiosCall('POST', `${this.link}/api/orders`, obj)
    }
    async getColorApp(){
        return {
            mainAppColor: 'grey',
            iconAppColor: 'black'
        }
    }
    async getAppText(){
        return (await axiosCall('GET', `${this.link}/api/fix/text`, {})).data
    }
    async timeUpdate(){
        return this.time
    }
    async getMyCamp(){
        return await axiosCall('GET', `${this.link}/api/getmycamps`, {})
    }
    async getOrders(){
        const res = (await axiosCall('GET', `${this.link}/api/orders/${this.campId}`, {})).data
        return await res.map(item => new OrderClass(item))
    }

}