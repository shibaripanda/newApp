import { Container, SimpleGrid, Text, TextInput } from '@mantine/core';
// import classes from './FeaturesGrid.module.css';
import React from 'react';
import { ComboBoxInput } from '../ComboInputBox/ComboBoxInput.tsx';

// {label: 'Модель', index: 'model', variants: true, freez: true, data: []}

export function OpenOrder(props) {

    const makeFields = () => {
        const res: Array<object> = []
        for(let i of Object.entries(props.data)){
            if( i[0] !== 'reviews'){
                res.push({'field': i[0], 'info': i[1]})
            }
            
        }
        console.log(res)
        return res
    }

    const data = makeFields()

    const features = data.map((item, index) => <Text key={index}>{item.info}</Text>);

    return (
        <Container style={{marginTop: '50px'}}>
        {/* <ButtonsForNewOrder value={props.value} defaultValue={props.defaultValue} setValue={props.setValue} serviceSettings={props.serviceSettings}/> */}
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