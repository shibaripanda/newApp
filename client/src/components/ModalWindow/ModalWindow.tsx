import { useDisclosure } from '@mantine/hooks';
import { Button, Container, Modal, SimpleGrid, Table, Text } from '@mantine/core';
import React from 'react';
import { OpenOrder } from '../../mainScreens/newOrderItems/OpenOrder.tsx';
import { dateToLokalFormat } from '../../modules/dateToLocalFormat.js';
import { axiosCall } from '../../modules/axiosCall.js';
import { sessionData } from '../../modules/sessionData.js';

export function ModalWindow(props) {
    
  const [opened, { open, close }] = useDisclosure(false);

  const titleComponent = () => {
    return (
      <div>
        <Text 
          fw={700}>{props.data.orderId + ' / ' + dateToLokalFormat(props.data.date) + ' /' + props.data.status}
        </Text>
      </div>
    )
  }

  const openOrder = async () => {
    open()
    console.log(props.data._id)
    const updatedOrder = await axiosCall('PUT', `http://localhost:5000/api/orders/${props.data._id}`, {$addToSet: {history: {date: Date.now(), text: 'open', name: sessionData('read', 'currentUser')}}})
    console.log(updatedOrder.data)
    props.setOrders([...props.filteringOrders.filter(item => item._id !== props.data._id), updatedOrder.data])
  }

    return (
        <>
            <Modal 
            radius={'md'} 
            size={'xxl'} 
            opened={opened} 
            onClose={close} 
            title={titleComponent()} 
            withCloseButton={false}
            >
                <div><OpenOrder getOrders={props.getOrders} serviceSettings={props.serviceSettings} data={props.data} close={close}/></div>
            </Modal>
            <Table.Tr key={props.data.title} style={{cursor: 'pointer'}} onClick={() => openOrder()}>
            {props.row}
            </Table.Tr>
        </>
      );
}