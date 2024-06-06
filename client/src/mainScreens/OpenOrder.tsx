import { Container, SimpleGrid, Text } from '@mantine/core';
// import classes from './FeaturesGrid.module.css';
import React from 'react';
import { ComboBoxInput } from '../components/ComboInputBox/ComboBoxInput.tsx';
// import { ComboBoxInput } from '../ComboInputBox/ComboBoxInput.tsx';

export function OpenOrder(props) {
    const fieldsOfOrder = Object.keys(props.data)
    const settingsField = props.serviceSettings.listOrdersFields.map(item => item.index)
    const dataForShow = () => {
        const newAr = []
        for(let i of fieldsOfOrder){
            if(settingsField.includes(i)){
                newAr.push({title: (props.serviceSettings.listOrdersFields.find(item => item.index === i)).label, text: props.data[i]})
            }
            else{
                newAr.push({title: i, text: props.data[i]})
            }
        }
       return newAr
    }
    const data = dataForShow()

    const features = data.map((item, index) => 
    <div key={index}>
        <Container>
            <Text fw={700}>{item.title}</Text>
            <Text>{item.text}</Text>
        </Container>
    </div>
    )

    return (
        <Container>
        {/* <ButtonsForNewOrder value={props.value} defaultValue={props.defaultValue} setValue={props.setValue} serviceSettings={props.serviceSettings}/> */}
        <SimpleGrid
            mt={5}
            cols={{ base: 1, sm: 2, md: 3 }}
            spacing={{ base: 'xl', md: 50 }}
            verticalSpacing={{ base: 'md', md: 20 }}
        >
            {features}
        </SimpleGrid>
        {/* <ComboBoxInput/> */}
        </Container>
    );
}