import { Button, Container, SimpleGrid, TextInput } from '@mantine/core';
// import classes from './FeaturesGrid.module.css';
import React from 'react';
import { ComboBoxInput } from '../ComboInputBox/ComboBoxInput.tsx';
import { ButtonsForNewOrder } from '../ButtonsForNewOrder/ButtonsForNewOrder.tsx';

// {label: 'Модель', index: 'model', variants: true, freez: true, data: []}

export function FeaturesGrid(props) {

    const makeFields = (field, index) => {
        if(field.variants){
            return <ComboBoxInput index={field.index} value={props.value} setValue={props.setValue} key={index} label={field.label} placeholder={field.label} data={field.data}/>
        }
        return <TextInput  key={index} label={field.label} placeholder={field.label} onChange={(event) => {
            props.setValue({...props.value, [field.index]: event.currentTarget.value})
          }}/>
    }

    const features = props.serviceSettings.listOrdersFields.map((field, index) => makeFields(field, index));

    return (
        <Container style={{marginTop: '50px'}}>
            
        {/* <ButtonsForNewOrder setValue={props.setValue}/> */}
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