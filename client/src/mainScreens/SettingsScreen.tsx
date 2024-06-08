import React from "react";
import { FeaturesGrid } from "../components/FeaturesGrid/FeaturesGrid.tsx";
import { LoaderItem } from "../components/Loader/LoaderItem.tsx";
import { SettingsItem } from "../components/SettingsItem/SettingsItem.tsx";
import { ColmsMainTable } from "./settingsItems/ColmsMainTable.tsx";

export const SettingsScreen = (props) => {

    if(true){
       return (
            <div>
                <SettingsItem title={'Settings'} body={<ColmsMainTable serviceSettings={props.serviceSettings}/>}/>
            </div>
        ) 
    }
    else{
        <div className={'mainScreenLoader'}><LoaderItem/></div>
    }

    
}