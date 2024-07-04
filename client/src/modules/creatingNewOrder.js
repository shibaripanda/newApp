import { rendomLetteOrder } from "./rendomLetteOrder"
import { rendomNumberOrder } from "./rendomNumberOrder"
import { sessionData } from "./sessionData"

export const createNewOrder = async (order) => {
    const number = () => rendomNumberOrder({min: 1000, max: 9999}) 
    const letter = () => rendomLetteOrder()
    const date = Date.now()
    
    return {
        ...order,
        date: date,
        orderId: number() + '_' + letter() + letter() + letter(),
        campId: sessionData('read', 'campId'),
        history: [{date: Date.now(), text: 'Greated', name: sessionData('read', 'currentUser')}],
        status: 'new',
        manager: sessionData('read', 'currentUser')
        }
}