import React, { useEffect, useState } from "react";
import { FeaturesGrid } from "../components/FeaturesGrid/FeaturesGrid.tsx";
import { Button } from "@mantine/core";
import { LoaderItem } from "../components/Loader/LoaderItem.tsx";

export const NewOrderScreen = (props) => {

    // const defaultValue = () => {
    //     const obj = {}
    //     for(let i of props.serviceSettings.listOrdersFields){
    //         obj[i.index] = ''
    //     }
    //     return obj
    // }
    

    // const [value, setValue] = useState(false);


    // useEffect(() => {
    //     const defaultValue2 = () => {
    //         const obj = {}
    //         for(let i of props.serviceSettings.listOrdersFields){
    //             obj[i.index] = ''
    //         }
    //         return obj
    //     }
    //     const defaultSetValue = () => {
    //         const res = defaultValue2()
    //         setValue(res)
    //     } 
    //     defaultSetValue()
    // },[props.serviceSettings.listOrdersFields])

    
    console.log(props.value)
    if(props.value){
       return (
            <FeaturesGrid defaultValue={props.defaultValue} value={props.value} setValue={props.setValue} serviceSettings={props.serviceSettings}/>
        ) 
    }
    else{
        <div className={'mainScreenLoader'}><LoaderItem/></div>
    }

    
}