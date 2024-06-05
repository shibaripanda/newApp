import React from "react";
import { Button, Container, SimpleGrid } from "@mantine/core";


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
            func: () => props.setValue(props.defaultValue(props.serviceSettings.listOrdersFields)),
            title: 'Сохранить',
            disabled: checkDisabledSave()
        },
        {
            func: () => props.setValue(props.defaultValue(props.serviceSettings.listOrdersFields)),
            title: 'Сохранить и распечатать',
            disabled: checkDisabledSave()
        }
    ]
        
    const features = controlOrderButtons.map((but, index) => <Button disabled={but.disabled} key={index} onClick={() => but.func()}>{but.title}</Button>)

    return (
        <Container style={{marginTop: '50px'}}>
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