import { Container, SimpleGrid, TextInput } from '@mantine/core';
// import classes from './FeaturesGrid.module.css';
import React from 'react';
import { ComboBoxInput } from '../ComboInputBox/ComboBoxInput.tsx';
import { ButtonsForNewOrder } from '../ButtonsForNewOrder/ButtonsForNewOrder.tsx';

export function FeaturesGrid(props) {

    const makeFields = (field, index) => {
        const firstKey = (Object.keys(field)[0])
        if(field[firstKey].variants){
            return <ComboBoxInput 
                index={firstKey} 
                value={props.value} 
                setValue={props.setValue} 
                key={index} 
                label={field[firstKey].label} 
                placeholder={field[firstKey].label} 
                data={props.serviceSettings.listOfDataForFastInput[firstKey]}
            />
        }
        return <TextInput  
            value={props.value[firstKey]}  
            key={index} label={field[firstKey].label} 
            placeholder={field[firstKey].label} 
            onChange={(event) => {props.setValue({...props.value, [firstKey]: event.currentTarget.value})}}
        />
    }

    const features = props.serviceSettings.listOrdersFields.map((field, index) => makeFields(field, index));

    return (
        <Container style={{marginTop: '50px'}}>
        <ButtonsForNewOrder value={props.value} defaultValue={props.defaultValue} setValue={props.setValue} serviceSettings={props.serviceSettings}/>
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