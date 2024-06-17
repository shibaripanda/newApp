import React, { useEffect, useState } from "react"
import { axiosCall } from "../../modules/axiosCall"
import { LoaderItem } from "../../components/Loader/LoaderItem.tsx"
import { TextInput, Container, Button } from '@mantine/core';

export const WorkersSettings = () => {

    const [user, setUser] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        getUserInfo()
    },[])
    
    const getUserInfo = async () => {
        const res = await axiosCall('GET', 'http://localhost:5000/api/users', {})
        if(typeof res.data['name'] === 'undefined'){
            res.data['name'] = 'empty'
        }
        setUser(res.data)
    }

    if(user){
        return (
             <div>
                <Container size={400} my={15}>
                    <TextInput label={`Имя Фамилия: ${user['name']}`} placeholder={user['name']} required onChange={event => setName(event.currentTarget.value)}/>
                    <Button fullWidth mt="sm" onClick={() =>  {
                        axiosCall('PUT', 'http://localhost:5000/api/users', {name: name})
                        getUserInfo()
                        }}>
                        Обновить
                    </Button>
                    <TextInput label={`Email: ${user['email']}`} placeholder={user['email']} required onChange={event => setEmail(event.currentTarget.value)}/>
                    <Button fullWidth mt="sm" disabled onClick={() => {
                        axiosCall('PUT', 'http://localhost:5000/api/users', {email: email})
                        getUserInfo()
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