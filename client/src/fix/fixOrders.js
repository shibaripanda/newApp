import { axiosCall } from "../modules/axiosCall"

export const fixOrders = async () => {

    const orders = await axiosCall('GET', `http://localhost:5000/api/orders/${sessionStorage.getItem(`campId ${sessionStorage.getItem('currentUser')}`)}`, {})
    return orders.data
    
}