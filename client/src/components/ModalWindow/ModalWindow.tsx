import { useDisclosure } from '@mantine/hooks';
import { Button, Container, Modal, SimpleGrid, Table, Text } from '@mantine/core';
import React, { useState } from 'react';
import { OpenOrder } from '../../mainScreens/newOrderItems/OpenOrder.tsx';
import { dateToLokalFormat } from '../../modules/dateToLocalFormat.js';
import { axiosCall } from '../../modules/axiosCall.js';
import { sessionData } from '../../modules/sessionData.js';

export function ModalWindow(props) {
    
  const [opened, { open, close }] = useDisclosure(false);
  const [timerBlock, setTimerBlock] = useState(0);

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
    await axiosCall('PUT', `http://localhost:5000/api/orders/${props.data._id}`, {$addToSet: {history: {date: Date.now(), text: 'block', name: sessionData('read', 'currentUser')}}})
    props.getOrders()
    setTimerBlock(setTimeout(async () => {
      close()
      await axiosCall('PUT', `http://localhost:5000/api/orders/${props.data._id}`, {$addToSet: {history: {date: Date.now(), text: 'open', name: sessionData('read', 'currentUser')}}})
      props.getOrders()
      console.log('таймаут')
    }, 10000))
  }

  const colorStatus = () => {
    if(props.data.status === 'new'){
      return 'blue'
    }
    else if(props.data.status === 'process'){
      return 'black'
    }
    else if(props.data.status === 'ready'){
      return 'green'
    }
    else if(props.data.status === 'waranty'){
      return 'red'
    }
    else if(props.data.status === 'close'){
      return 'grey'
    }
    else if(props.data.status === 'wait'){
      return 'yellow'
    }
    return 'black'
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
                <div><OpenOrder timerBlock={timerBlock} getOrders={props.getOrders} serviceSettings={props.serviceSettings} data={props.data} close={close}/></div>
            </Modal>
            <Table.Tr key={props.data.title} style={{cursor: 'pointer', color: colorStatus()}} onClick={() => openOrder()}>
            {props.row}
            </Table.Tr>
        </>
      );
}