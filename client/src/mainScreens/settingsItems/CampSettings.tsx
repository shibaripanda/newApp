import React, { useEffect, useState } from "react"
import { axiosCall } from "../../modules/axiosCall"
import { LoaderItem } from "../../components/Loader/LoaderItem.tsx"
import { TextInput, Container, Button, Textarea } from '@mantine/core';
import { updatecampsettings } from "../../fix/fixServiceSettings.js";

export const CampSettings = (props) => {

    const [data, setData] = useState(props.serviceSettings.campSettings)
    const activOrDis = (a, b) => {
        if(a == b) return true
        return false
    }

    const res: any = []
    let check = false
    for(let i in data){
        res.push(
            <div key={i}>
            <Textarea resize="vertical" label={data[i].label} placeholder={data[i].text} value={data[i].text} required onChange={event => {data[i].text = setData({...data, [i]:{...data[i], text: event.currentTarget.value}})}}/>
                    <Button 
                    disabled={activOrDis(data[i].text, props.serviceSettings.campSettings[i].text)} 
                    mt="sm" 
                    onClick={async () =>  {
                        props.setServiceSettings({...props.serviceSettings, campSettings: data})
                        await updatecampsettings({item: i, newData: data[i].text})
                        }}>
                        Обновить
                    </Button>
            </div>
        )
        check = true
    }
    

    if(check){
        return (
             <div>
                <Container size={800} my={15}>
                    {res}
                    {/* <TextInput label={`Имя Фамилия`} placeholder={'name'} required onChange={event => {}}/>
                    <Button mt="sm" onClick={async () =>  {
                        await updatecampsettings({item: 'namecomp', newData: 'hjhjjhjh'})
                        }}>
                        Обновить
                    </Button>
                    <Textarea label={`Имя Фамилия`} placeholder={'name'} required onChange={event => {}}/>
                    <Button mt="sm" onClick={async () =>  {
                        await updatecampsettings({item: 'namecomp', newData: 'hjhjjhjh'})
                        }}>
                        Обновить
                    </Button> */}
                </Container>
             </div>
         ) 
    }
    else{
        <div className={'mainScreenLoader'}><LoaderItem/></div>
    }
}