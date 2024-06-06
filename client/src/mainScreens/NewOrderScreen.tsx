import React from "react";
import { FeaturesGrid } from "../components/FeaturesGrid/FeaturesGrid.tsx";
import { LoaderItem } from "../components/Loader/LoaderItem.tsx";

export const NewOrderScreen = (props) => {

    if(props.value){
       return (
            <FeaturesGrid defaultValue={props.defaultValue} value={props.value} setValue={props.setValue} serviceSettings={props.serviceSettings}/>
        ) 
    }
    else{
        <div className={'mainScreenLoader'}><LoaderItem/></div>
    }

    
}