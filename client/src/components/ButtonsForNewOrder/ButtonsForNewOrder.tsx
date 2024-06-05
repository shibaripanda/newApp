import React from "react";
import { Button, Container, SimpleGrid } from "@mantine/core";
import { features } from "process";


export const ButtonsForNewOrder = (props) => {


    
    const controlOrderButtons = [

        {
            func: props.setValue(props.defaultValue(props.serviceSettings.listOrdersFields)),
            title: 'Очистить'
        },
        {
            func: props.setValue(props.defaultValue(props.serviceSettings.listOrdersFields)),
            title: 'Сохранить'
        },
        {
            func: props.setValue(props.defaultValue(props.serviceSettings.listOrdersFields)),
            title: 'Сохранить и распечатать'
        },
        // <Button  onClick={() => props.setValue(props.defaultValue(props.serviceSettings.listOrdersFields))}>
        // Очистить
        // </Button>,
        // // &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        // <Button>
        // Сохранить
        // </Button>,
        // <Button>
        // Сохранить и распечатать
        // </Button>
    ]
        
  
    

const features = controlOrderButtons.map(but => <Button onClick={but.func}>{but.title}</Button>)

return (
    <Container style={{marginTop: '50px'}}>
        <ButtonsForNewOrder defaultValue={props.defaultValue} setValue={props.setValue} serviceSettings={props.serviceSettings}/>
        <SimpleGrid
            mt={30}
            cols={{ base: 1, sm: 2, md: 3 }}
            spacing={{ base: 'xl', md: 50 }}
            verticalSpacing={{ base: 'xl', md: 30 }}
        >
            {features}
        </SimpleGrid>
    </Container>
    )
}