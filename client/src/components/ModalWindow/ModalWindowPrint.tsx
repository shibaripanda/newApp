import { useDisclosure } from '@mantine/hooks';
import { Button, Modal } from '@mantine/core';
import React, { useState } from 'react'
import { Print } from '../Print/Print';
import { createNewOrder } from '../../modules/creatingNewOrder';
import { LoaderItem } from '../Loader/LoaderItem.tsx';

export function ModalWindowPrint(props) {

  console.log(props.data)
    
  const [opened, { open, close }] = useDisclosure(false)
  const [order, setOrder] = useState(false)

  const openOrder = async () => {
    const order = await createNewOrder(props.data)
    setTimeout(() => setOrder(order), 1000)
    props.handler()
    open()
  }

  const loadPrint = () => {
    if(order){
      return <Print close={close} format={props.format} data={order}/>
    }
    return <div className={'mainScreenLoader'}><LoaderItem/></div>
  }

    return (
        <>
            <Modal
            // style={{textAlign: 'center'}}
            radius={'md'} 
            size={'850px'} 
            opened={opened} 
            onClose={close}
            withCloseButton={false}
            >
              {loadPrint()}
              {/* <Print close={close} format={props.format} data={props.data}/> */}
            </Modal>
            <Button disabled={props.disabled} color={props.color} style={{cursor: 'pointer'}} onClick={() => openOrder()}>
            {props.label}
            </Button>
        </>
      );
}