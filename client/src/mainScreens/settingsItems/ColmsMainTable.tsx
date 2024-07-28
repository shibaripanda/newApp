import React, { useEffect } from "react"
import { DndList } from "../../components/DndList/DndList.tsx"

export const ColmsMainTable = (props: any) => {

    useEffect(() => {
    }, [])

    // const getTable = async () => {
    //     const res: any = []
    //     for(const i of props.serviceSettings.userMainTable){
    //         res.push(props.serviceSettings.generalOrderList.find((item: any) => item.index === i))
    //     }
    //     // console.log(res)
    //     return res
    // }
    
    
    const dateTableHeaders = props.serviceSettings.generalOrderList.filter((item: any) => item.maintable === true)

    
  
    return (
        <div>
            <DndList data={dateTableHeaders} serviceSettings={props.serviceSettings} setServiceSettings={props.setServiceSettings}/>
        </div>
    )
    
}