import { axiosCall } from "../modules/axiosCall"

export const fixText = async () => {

    return (await axiosCall('GET', 'http://localhost:5000/api/fix/text', {})).data
    
}