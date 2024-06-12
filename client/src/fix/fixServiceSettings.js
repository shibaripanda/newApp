import { axiosCall } from "../modules/axiosCall"

export const fixServiceSettings = async () => {

    return (await axiosCall('GET', 'http://localhost:5000/api/fix/fixservicesettings', {})).data

}