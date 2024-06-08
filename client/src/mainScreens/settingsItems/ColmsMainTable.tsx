import React from "react"
import { DndList } from "../../components/DndList/DndList.tsx"
import { CheckBox1 } from "../../components/CheckBox1/CheckBox1.tsx"
import { GridForItems } from "../../components/GridForItems/GridForItems.tsx"

export const ColmsMainTable = (props) => {

    const dataChecks =  props.serviceSettings.listOrdersFields
    // .filter(item => item.hide === false)ы
    .map(item => <CheckBox1 activ={item.maintable} label={item.label}/>)

    const dateTableHeaders = props.serviceSettings.listOrdersFields
    .filter(item => item.maintable === true)
    .map(item => item.label)

    const data = [
        { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
        { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
        { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
        { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
        { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
      ];

    return (
            <div>
                <DndList data={dateTableHeaders}/>
                <GridForItems data={dataChecks} count={5}/>
            </div>
        )
}