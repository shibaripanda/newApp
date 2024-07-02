import { useDisclosure } from '@mantine/hooks';
import { Button, Modal } from '@mantine/core';
import React from 'react'
import { Print } from '../Print/Print';

export function ModalWindowPrint(props) {
    
  const [opened, { open, close }] = useDisclosure(false)

  const openOrder = async () => {
    open()
  }

    return (
        <>
            <Modal 
            radius={'md'} 
            size={'xxl'} 
            opened={opened} 
            onClose={close}
            withCloseButton={false}
            >
                <Print close={close} format={props.format} data={props.data}/>
            </Modal>
            <Button style={{cursor: 'pointer'}} onClick={() => openOrder()}>
            {props.label}
            </Button>
        </>
      );
}