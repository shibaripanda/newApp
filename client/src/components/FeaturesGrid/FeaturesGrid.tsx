import { Container, SimpleGrid, TextInput } from '@mantine/core';
// import classes from './FeaturesGrid.module.css';
import React from 'react';
import { ComboBoxInput } from '../ComboInputBox/ComboBoxInput.tsx';
import { ButtonsForNewOrder } from '../ButtonsForNewOrder/ButtonsForNewOrder.tsx';

export function FeaturesGrid(props) {

    const makeFields = (field, index) => {
        // const firstKey = (Object.keys(field)[0])
        // if(field.card){
            if(field.variants){
                return <ComboBoxInput 
                    index={field.index} 
                    value={props.value} 
                    setValue={props.setValue} 
                    key={index} 
                    label={field.label} 
                    placeholder={field.label} 
                    data={props.serviceSettings.listOfDataForFastInput[field.index]}
                />
            }
            return <TextInput  
                value={props.value[field.index]}  
                key={index} 
                label={field.label} 
                placeholder={field.label} 
                onChange={(event) => {props.setValue({...props.value, [field.index]: event.currentTarget.value})}}
            />
        // }
    }

    const features = props.serviceSettings.listOrdersFields.filter(item => item.neworder === true).map((field, index) => makeFields(field, index));

    return (
        <Container style={{marginTop: '50px'}}>
        <ButtonsForNewOrder orders={props.orders} value={props.value} defaultValue={props.defaultValue} setValue={props.setValue} serviceSettings={props.serviceSettings}/>
        <SimpleGrid
            mt={30}
            cols={{ base: 1, sm: 2, md: 3 }}
            spacing={{ base: 'xl', md: 50 }}
            verticalSpacing={{ base: 'xl', md: 30 }}
        >
            {features}
        </SimpleGrid>
        </Container>
    );
}