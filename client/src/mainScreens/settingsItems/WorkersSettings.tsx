import React, { useEffect, useState } from "react"
import { axiosCall } from "../../modules/axiosCall"
import { LoaderItem } from "../../components/Loader/LoaderItem.tsx"
import { TextInput, Container, Button, List, SimpleGrid, InputBase, Select } from '@mantine/core';
import { addNewUserToCamp, deleteUserFromCamp, editUserRole, getUsersOfCamp } from "../../fix/fixServiceSettings.js";
import { validateEmail } from "../../modules/validateEmail.js";

export const WorkersSettings = (props) => {

    const [users, setUsers] = useState([])
    const [role, setRole] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        getUsers()
    },[])
    
    const getUsers = async () => {
        const res = await getUsersOfCamp()
        console.log(res)
        setUsers(res.data.reverse())
    }
    const activBut = () => {
        if(!validateEmail(email) || role === '') return true
        return false
    }
    const stopDeleteOwner = (role) => {
        if(role === 'owner') return true
        return false
    }
   const updateUserRole = async (value, email) => {
        console.log(value)
        await editUserRole({email: email, role: value})
    }

    const showRoleEdit = (user) => {
        if(user.role !== 'owner'){
            return (
                    <Select
                        style={{marginTop: '1vmax'}} 
                        defaultValue={user['role']}
                        label="Change role"
                        data={props.serviceSettings.generalRoleList}
                        onChange={(value) => updateUserRole(value, user.email)}
                    />
            )
        }
    } 

    if(users.length){
        return (
             <div>
                <Container size={400} my={15}>
                    <div style={{marginBottom: '7vmax'}}>
                    <TextInput 
                        style={{marginTop: '3vmax'}} 
                        label={`Email`} 
                        placeholder={'email'} 
                        required 
                        onChange={event => setEmail(event.currentTarget.value)}
                    />
                    <Select
                        label="Role"
                        placeholder="Role"
                        value={role}
                        clearable
                        required 
                        data={props.serviceSettings.generalRoleList}
                        onChange={(value) => setRole(value ? value : '')}
                    />
                    <Button fullWidth mt="sm" disabled={activBut()} onClick={async () => {
                        await addNewUserToCamp({email: email, role: role})
                        getUsers()
                        }}>
                        Добавить
                    </Button>
                    </div>

                    {users.map((item, index) =>
                    <div style={{marginTop: '2vmax', marginBottom: '1vmax'}}>
                        <div>
                            {index + 1}. {item['email']} {`(${item['role']})`}
                        </div>
                    {showRoleEdit(item)}
                    <Button fullWidth mt="sm" disabled={stopDeleteOwner(item['role'])} onClick={async () => {
                            await deleteUserFromCamp(item)
                            getUsers()
                            }}>
                            Удалить
                        </Button>
                    <hr style={{marginTop: '1vmax', marginBottom: '1vmax'}}></hr>
                    </div>
                    )}
                    
                </Container>
             </div>
         ) 
    }
    else{
        <div className={'mainScreenLoader'}><LoaderItem/></div>
    }
}