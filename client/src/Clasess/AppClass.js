import { axiosCall } from "../modules/axiosCall"
import { sessionData } from "../modules/sessionData"
import { OrderClass } from "./OrderClass.js"

export class AppClass {

    constructor(){
        this.time = 50000
        this.link = 'http://localhost:5000'
        this.campId = sessionData('read', 'campId')

    }

    async getCurrentUser(){
        return sessionData('read', 'currentUser')
    }

    async getCampId(){
        return sessionData('read', 'campId')
    }

    async fixServiceSettings(){
        return (await axiosCall('GET', `${this.link}/api/getsettingscamp/${sessionData('read', 'campId')}`, {})).data
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
        console.log('getOrders')
        const res = (await axiosCall('GET', `${this.link}/api/orders/${this.campId}`, {})).data
        console.log(res)
        return await res.map(item => new OrderClass(item))
    }

}