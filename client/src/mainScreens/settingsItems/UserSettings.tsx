import React, { useEffect, useState } from "react"
import { LoaderItem } from "../../components/Loader/LoaderItem.tsx"
import { TextInput, Container, Button } from '@mantine/core'

export const UserSettings = (props) => {

    const [user, setUser] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        getUserInfo()
    },[])
    
    const getUserInfo = async () => {
        const res: any = await props.app.getUser()
        setUser(res)
    }

    if(user){
        return (
             <div>
                <Container size={400} my={15}>
                    <TextInput label={`Имя Фамилия: ${user['name']}`} placeholder={user['name']} required onChange={event => setName(event.currentTarget.value)}/>
                    <Button fullWidth mt="sm" onClick={async() =>  {
                        await props.app.updateUserName({name: name})
                        await getUserInfo()
                        }}>
                        Обновить
                    </Button>
                    <TextInput label={`Email: ${user['email']}`} placeholder={user['email']} required onChange={event => setEmail(event.currentTarget.value)}/>
                    <Button fullWidth mt="sm" disabled onClick={() => {
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