import React from "react";
import { LoaderItem } from "../components/Loader/LoaderItem.tsx";
import { SettingsItem } from "../components/SettingsItem/SettingsItem.tsx";
import { ColmsMainTable } from "./settingsItems/ColmsMainTable.tsx";

export const SettingsScreen = (props: any) => {

    if(props){
       return (
            <div>
                <SettingsItem title={'Settings'} body={<ColmsMainTable serviceSettings={props.serviceSettings} setServiceSettings={props.setServiceSettings}/>}/>
            </div>
        ) 
    }
    else{
        <div className={'mainScreenLoader'}><LoaderItem/></div>
    }

    
}