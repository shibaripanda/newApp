import { rendomLetteOrder } from "./rendomLetteOrder"
import { rendomNumberOrder } from "./rendomNumberOrder"

export const createNewOrder = (order) => {
    const number = () => rendomNumberOrder({min: 1000, max: 9999}) 
    const letter = () => rendomLetteOrder()
    const date = Date.now()
    
    return {...order, date: date, orderId: number() + '_' + letter() + letter() + letter(), campId: sessionStorage.getItem('campId')}
}