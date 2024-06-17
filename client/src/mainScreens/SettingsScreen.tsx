import React from "react";
import { LoaderItem } from "../components/Loader/LoaderItem.tsx";
import { SettingsItem } from "../components/SettingsItem/SettingsItem.tsx";
import { ColmsMainTable } from "./settingsItems/ColmsMainTable.tsx";
import { UserSettings } from "./settingsItems/UserSettings.tsx";
import { WorkersSettings } from "./settingsItems/WorkersSettings.tsx";

export const SettingsScreen = (props: any) => {

    if(props){
       return (
            <div>
                <SettingsItem title={props.text.settingsMainTable} body={<ColmsMainTable serviceSettings={props.serviceSettings} setServiceSettings={props.setServiceSettings}/>}/>
                <SettingsItem title={props.text.workers} body={<WorkersSettings/>}/>
                <SettingsItem title={props.text.UserSettings} body={<UserSettings/>}/>
            </div>
        ) 
    }
    else{
        <div className={'mainScreenLoader'}><LoaderItem/></div>
    }

    
}