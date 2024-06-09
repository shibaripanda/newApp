import React, { useState } from "react"
import { DndList } from "../../components/DndList/DndList.tsx"
import { CheckBox1 } from "../../components/CheckBox1/CheckBox1.tsx"
import { GridForItems } from "../../components/GridForItems/GridForItems.tsx"

export const ColmsMainTable = (props) => {

    // const [dateTableHeaders, setDateTableHeaders] = useState(props.serviceSettings.listOrdersFields.filter(item => item.maintable === true))

    const dataChecks =  props.serviceSettings.listOrdersFields
    // .sort((a, b) => b.maintable - a.maintable)
    .map((item, index) => <CheckBox1 key={index} item={item} serviceSettings={props.serviceSettings}/>)

    const dateTableHeaders = props.serviceSettings.listOrdersFields.filter(item => item.maintable === true)
    console.log(dateTableHeaders.length)

    return (
            <div>
                <DndList data={dateTableHeaders} serviceSettings={props.serviceSettings}/>
                <GridForItems data={dataChecks} count={4}/>
            </div>
        )
}