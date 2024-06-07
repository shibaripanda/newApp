import React from "react";
import { Button, Container, SimpleGrid } from "@mantine/core";
import { myEmitter } from "../../modules/createLisener";
import { createNewOrder } from "../../modules/creatingNewOrder";

export const ButtonsForNewOrder = (props) => {

    
    const  checkDisabledClean = () => {
        if(Object.values(props.value).filter(item => item === '').length === Object.values(props.value).length){
            return true
        }
        return false
    }
    const  checkDisabledSave = () => {
        if(Object.values(props.value).filter(item => item !== '').length === Object.values(props.value).length){
            return false
        }
        return true
    }

    const controlOrderButtons = [
        {
            func: () => props.setValue(props.defaultValue(props.serviceSettings.listOrdersFields)),
            title: 'Очистить',
            disabled: checkDisabledClean()
        },
        {
            func: () => {
                myEmitter.emit('createNewOrder', {newOrder: createNewOrder(props.value), orders: props.orders})
                props.setValue(props.defaultValue(props.serviceSettings.listOrdersFields))
            },
            title: 'Сохранить',
            disabled: checkDisabledSave()
        },
        {
            func: () => props.setValue(props.defaultValue(props.serviceSettings.listOrdersFields)),
            title: 'Сохр. и открыть',
            disabled: checkDisabledSave()
        },
        {
            func: () => props.setValue(props.defaultValue(props.serviceSettings.listOrdersFields)),
            title: 'Сохр. и печать',
            disabled: checkDisabledSave(),
            color: 'green'
        }
    ]
        
    const features = controlOrderButtons.map((but, index) => <Button color={but.color} disabled={but.disabled} key={index} onClick={() => but.func()}>{but.title}</Button>)

    return (
        <Container style={{marginTop: '50px'}}>
            <SimpleGrid
                mt={30}
                cols={{ base: 1, sm: 2, md: features.length }}
                spacing={{ base: 'xl', md: 50 }}
                verticalSpacing={{ base: 'xl', md: 30 }}
            >
                {features}
            </SimpleGrid>
        </Container>
    )
}