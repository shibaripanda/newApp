import { axiosCall } from "../modules/axiosCall"
import { sessionData } from "../modules/sessionData"

export const fixOrders = async () => {

    const orders = await axiosCall('GET', `http://localhost:5000/api/orders/${sessionData('read', 'campId')}`, {})
    return orders.data
    
}