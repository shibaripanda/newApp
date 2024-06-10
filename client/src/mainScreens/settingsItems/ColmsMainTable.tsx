import React from "react"
import { DndList } from "../../components/DndList/DndList.tsx"

export const ColmsMainTable = (props: any) => {

    const dateTableHeaders = props.serviceSettings.listOrdersFields.filter((item: any) => item.maintable === true)

    return (
            <div>
                <DndList data={dateTableHeaders} serviceSettings={props.serviceSettings} setServiceSettings={props.setServiceSettings}/>
            </div>
        )
}