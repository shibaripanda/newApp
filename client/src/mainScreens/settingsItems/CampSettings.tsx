import React, { useEffect, useState } from "react"
import { axiosCall } from "../../modules/axiosCall"
import { LoaderItem } from "../../components/Loader/LoaderItem.tsx"
import { TextInput, Container, Button } from '@mantine/core';

export const CampSettings = (props) => {

console.log(props.serviceSettings.campSettings)


    if(true){
        return (
             <div>
                <Container size={400} my={15}>
                    <TextInput label={`Имя Фамилия`} placeholder={'name'} required onChange={event => {}}/>
                    <Button fullWidth mt="sm" onClick={() =>  {
                        // axiosCall('PUT', 'http://localhost:5000/api/users', {})
                        }}>
                        Обновить
                    </Button>
                </Container>
             </div>
         ) 
    }
    else{
        <div className={'mainScreenLoader'}><LoaderItem/></div>
    }
}