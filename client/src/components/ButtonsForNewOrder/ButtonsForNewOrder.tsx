import React, { useEffect, useState } from "react";
import { Button, Container, SimpleGrid } from "@mantine/core";
import { myEmitter } from "../../modules/createLisener";
import { createNewOrder } from "../../modules/creatingNewOrder";
import { ModalWindowPrint } from "../ModalWindow/ModalWindowPrint.tsx";

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
            title: 'Очистить',
            disabled: checkDisabledClean(),
            print: false,
            func: () => props.setValue(props.defaultValue(props.serviceSettings.listOrdersFields)),
        },
        {
            title: 'Сохранить',
            disabled: checkDisabledSave(),
            print: false,
            func: async () => {
                const newOr = await createNewOrder(props.value)
                myEmitter.emit('createNewOrder', {newOrder: newOr, orders: props.orders})
                props.setValue(props.defaultValue(props.serviceSettings.listOrdersFields))
            }, 
        },
        {
            title: 'Сохр. и открыть',
            disabled: checkDisabledSave(),
            print: false,
            func: () => props.setValue(props.defaultValue(props.serviceSettings.listOrdersFields)),
        },
        {
            title: 'Сохр. и печать',
            disabled: false, //checkDisabledSave(),
            color: 'green',
            print: true,
            func: async () => {
                const newOr = await createNewOrder(props.value)
                // myEmitter.emit('createNewOrderAndPrint', {newOrder: newOr, orders: props.orders})
                // props.setValue(props.defaultValue(props.serviceSettings.listOrdersFields))
            },
        }
    ]

    const printBut = (but, index) => {
        if(but.print){
            if(!but.disabled){
                return <ModalWindowPrint color={but.color} key={index} disabled={but.disabled} label={but.title} format={'order'} handler={but.func} data={props.value}/>
            }
        }
        return <Button color={but.color} disabled={but.disabled} key={index} onClick={() => but.func()}>{but.title}</Button>
    }
        
    // const features = controlOrderButtons.map((but, index) => <Button color={but.color} disabled={but.disabled} key={index} onClick={() => but.func()}>{but.title}</Button>)
    const features = controlOrderButtons.map((but, index) => printBut(but, index))

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